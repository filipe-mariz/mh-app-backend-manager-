import { Injectable } from '@nestjs/common';
import Redis from "ioredis";

@Injectable()
export class BaseRepository {
	private readonly client: Redis;
  private repository: any;
  private cacheKey: string;

  constructor(model: any, cacheKey: string) {
		this.client = new Redis({ host: 'localhost', port: 6379 });
    this.repository = model.scope('defaultOptions');
    this.cacheKey = cacheKey;
  }

  public async create(data: any) {
    await this.client.del(this.cacheKey);
    const response = await this.repository.create(data);
    return response;
  }

  public async findAll(): Promise<any> {
    const cache = await this.client.get(this.cacheKey);
    if (cache) {
      return JSON.parse(cache);
    }

    const response = await this.repository.findAll();
    await this.client.set(this.cacheKey, JSON.stringify(response));

    return response;
  }

  public async findOne(where: any): Promise<any> {
    const cache = await this.client.get(`${this.cacheKey}_${where.id.toString()}`);
    if (cache) {
      return JSON.parse(cache);
    }

    const response = await this.repository.findOne({ where });
    await this.client.set(`${this.cacheKey}_${response.id.toString()}`, JSON.stringify(response), 'EX', 3600);

    return response;
  }

  public async update(data: object, where: any) {
    await this.client.del(this.cacheKey);
    await this.repository.update(data, { where });

    return await this.repository.findOne({ where });
  }

  public async remove(where: any) {
    await this.client.del(this.cacheKey);
    await this.repository.destroy({ where })

    return await this.repository.findAll();
  }
}
