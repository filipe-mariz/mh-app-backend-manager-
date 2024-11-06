import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseRepository } from 'src/app/base/base.repository';
import { MissionComentsDatabase } from './missionComents.database';
import { mission_coments } from '../entities/mission-coment.entity';
import { IFindMissionComents } from '../dto/find-mission-coment.input';

@Injectable()
export class MissionComentsRepository extends BaseRepository implements MissionComentsDatabase {
  constructor(
    @InjectModel(mission_coments)
    misssionComentsRepository: typeof mission_coments
  ) {
    super(misssionComentsRepository, 'MISSION_COMENTS');
  }

  public async findAllByMission<mission_coments>(where: IFindMissionComents): Promise<mission_coments[]> {
    const cache = await this.client.get(this.cacheKey);
    if (cache) return JSON.parse(cache);

    const response = await this.repository.findAll({ where, attributes: ['id', 'text'] });
    this.client.set(this.cacheKey, JSON.stringify(response), 'EX', 3600);

    return response;
  }
}
