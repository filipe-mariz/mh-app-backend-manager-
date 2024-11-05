import { Injectable } from '@nestjs/common';
import { CreateMissionAgencyInput } from './dto/create-mission-agency.input';
import { UpdateMissionAgencyInput } from './dto/update-mission-agency.input';

@Injectable()
export class MissionAgencyService {
  create(createMissionAgencyInput: CreateMissionAgencyInput) {
    return 'This action adds a new missionAgency';
  }

  findAll() {
    return `This action returns all missionAgency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} missionAgency`;
  }

  update(id: number, updateMissionAgencyInput: UpdateMissionAgencyInput) {
    return `This action updates a #${id} missionAgency`;
  }

  remove(id: number) {
    return `This action removes a #${id} missionAgency`;
  }
}
