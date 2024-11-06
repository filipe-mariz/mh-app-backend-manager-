import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BaseRepository } from 'src/app/base/base.repository';
import { MissionComentsDatabase } from './missionComents.database';
import { mission_coments } from '../entities/mission-coment.entity';

@Injectable()
export class AgencyRepository extends BaseRepository implements MissionComentsDatabase {
  constructor(
    @InjectModel(mission_coments)
    misssionComentsRepository: typeof mission_coments
  ) {
    super(misssionComentsRepository, 'MISSION_COMENTS');
  }
}
