import { Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid';

import { CreateMissionComentInput } from './dto/create-mission-coment.input';
import { MissionComentsDatabase } from './database/missionComents.database';
import { IFindMissionComents } from './dto/find-mission-coment.input';

@Injectable()
export class MissionComentsService {
  constructor(private readonly database: MissionComentsDatabase) {}

  public create(createMissionComentInput: CreateMissionComentInput) {
    return this.database.create({
      id: uuidv1(),
      ...createMissionComentInput
    });
  }

  public findAll(filter: IFindMissionComents) {
    return this.database.findAllByMission({
      mission_id: filter.mission_id
    });
  }
}
