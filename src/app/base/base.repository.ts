import { Injectable } from '@nestjs/common';
import { QueryData } from 'src/utils/global/globalInterface';
import { users } from '../modules/user/entities/user.entity';

@Injectable()
export class BaseRepository {
  private repository: any

  constructor(model: any) {
    this.repository = model
  }

  create(data: any) {
    return this.repository.create(data)
  }

  findOne(filter: QueryData): Promise<users[]> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<users[]> {
    throw new Error('Method not implemented.');
  }
}