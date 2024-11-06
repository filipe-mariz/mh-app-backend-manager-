import { Injectable } from '@nestjs/common';
import { CreateMissionComentInput } from './dto/create-mission-coment.input';

@Injectable()
export class MissionComentsService {
  create(createMissionComentInput: CreateMissionComentInput) {
    return 'This action adds a new missionComent';
  }

  findAll() {
    return `This action returns all missionComents`;
  }
}
