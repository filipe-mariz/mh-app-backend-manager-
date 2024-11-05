import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/app/base/base.repository';
import { InjectModel } from '@nestjs/sequelize';
import { AgencyDatabase } from './agency.database';
import { agency } from '../entities/mission-agency.entity';

@Injectable()
export class AgencyRepository extends BaseRepository implements AgencyDatabase {
  constructor(
    @InjectModel(agency)
    agencyRepository: typeof agency
  ) {
    super(agencyRepository, 'AGENCY')
  }
}
