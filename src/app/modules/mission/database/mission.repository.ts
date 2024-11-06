import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { BaseRepository } from 'src/app/base/base.repository';
import { MissionDatabase } from './mission.database';
import { mission } from '../entities/mission.entity';

@Injectable()
export class MissionRepository extends BaseRepository implements MissionDatabase {
  constructor(
    @InjectModel(mission)
    missionRepository: typeof mission
  ) {
    super(missionRepository, 'AGENCY');
  }

  public async findByAgency<mission>(where: IMissionFilter): Promise<mission[]> {
    const cache = await this.client.get(this.cacheKey);
    if (cache) return JSON.parse(cache);

    const response = await this.repository.findAll({
      where,
      attributes: ['id', 'name', 'poster', 'description', 'requirements', 'startDate', 'endData']
    })
    this.client.set(this.cacheKey, JSON.stringify(response), 'EX', 3600);

    return response;
  }

}
