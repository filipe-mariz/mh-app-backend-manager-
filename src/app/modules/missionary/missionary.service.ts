import { Injectable } from '@nestjs/common';
import { CreateMissionaryInput } from './dto/create-missionary.input';
import { UpdateMissionaryInput } from './dto/update-missionary.input';

@Injectable()
export class MissionaryService {
  create(createMissionaryInput: CreateMissionaryInput) {
    return 'This action adds a new missionary';
  }

  findAll() {
    return `This action returns all missionary`;
  }

  findOne(id: number) {
    return `This action returns a #${id} missionary`;
  }

  update(id: number, updateMissionaryInput: UpdateMissionaryInput) {
    return `This action updates a #${id} missionary`;
  }

  remove(id: number) {
    return `This action removes a #${id} missionary`;
  }
}
