import { Injectable } from '@nestjs/common';
import { CreateMissionComentInput } from './dto/create-mission-coment.input';
import { UpdateMissionComentInput } from './dto/update-mission-coment.input';

@Injectable()
export class MissionComentsService {
  create(createMissionComentInput: CreateMissionComentInput) {
    return 'This action adds a new missionComent';
  }

  findAll() {
    return `This action returns all missionComents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} missionComent`;
  }

  update(id: number, updateMissionComentInput: UpdateMissionComentInput) {
    return `This action updates a #${id} missionComent`;
  }

  remove(id: number) {
    return `This action removes a #${id} missionComent`;
  }
}
