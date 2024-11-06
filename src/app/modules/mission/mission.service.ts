import { Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid'

import { CreateMissionInput } from './dto/create-mission.input';
import { UpdateMissionInput } from './dto/update-mission.input';
import { MissionDatabase } from './database/mission.database';
import { mission } from './entities/mission.entity';

@Injectable()
export class MissionService {
  constructor(private readonly database: MissionDatabase) {}

  public create(createMissionInput: CreateMissionInput) {
    return this.database.create({
      id: uuidv1(),
      ...createMissionInput
    })
  }

  public findAll() {
    return this.database.findAll<mission>();
  }

  public findAllMissionsByAgency(filter: IMissionFilter) {
    return this.database.findByAgency<mission>(filter);
  }

  public findOne(id: string, mission_agency_id: string) {
    return this.database.findOne({
      id,
      mission_agency_id,
    });
  }

  public update(id: string, updateMissionInput: UpdateMissionInput) {
    return this.database.update(updateMissionInput, { id });
  }

  public remove(id: string) {
    return this.database.remove({ id });
  }
}
