import { Injectable } from '@nestjs/common';

import { v1 as uuidv1 } from 'uuid'

import { CreateMissionAgencyInput } from './dto/create-mission-agency.input';
import { UpdateMissionAgencyInput } from './dto/update-mission-agency.input';
import { AgencyDatabase } from './database/agency.database';
import { agency } from './entities/mission-agency.entity';
import { QueryData } from 'src/utils/global/globalInterface';

@Injectable()
export class MissionAgencyService {
  constructor(private readonly database: AgencyDatabase) {}

  public create(createMissionAgencyInput: CreateMissionAgencyInput) {
    return this.database.create({
      id: uuidv1(),
      ...createMissionAgencyInput
    })
  }

  public findAll() {
    return this.database.findAll<agency>()
  }

  public findOne(filter: QueryData) {
    return this.database.findOne<agency>(filter);
  }

  public update(filter: QueryData, updateMissionAgencyInput: UpdateMissionAgencyInput) {
    return this.database.update<agency>(updateMissionAgencyInput, filter);
  }

  public remove(filter: QueryData) {
    return this.database.remove<agency>(filter)
  }
}
