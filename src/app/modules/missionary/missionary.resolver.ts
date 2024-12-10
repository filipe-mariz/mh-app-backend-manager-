import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MissionaryService } from './missionary.service';
import { Missionary } from './entities/missionary.entity';
import { CreateMissionaryInput } from './dto/create-missionary.input';
import { UpdateMissionaryInput } from './dto/update-missionary.input';

@Resolver(() => Missionary)
export class MissionaryResolver {
  constructor(private readonly missionaryService: MissionaryService) {}

  @Mutation(() => Missionary)
  createMissionary(@Args('createMissionaryInput') createMissionaryInput: CreateMissionaryInput) {
    return this.missionaryService.create(createMissionaryInput);
  }

  @Query(() => [Missionary], { name: 'missionary' })
  findAll() {
    return this.missionaryService.findAll();
  }

  @Query(() => Missionary, { name: 'missionary' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.missionaryService.findOne(id);
  }

  @Mutation(() => Missionary)
  updateMissionary(@Args('updateMissionaryInput') updateMissionaryInput: UpdateMissionaryInput) {
    return this.missionaryService.update(updateMissionaryInput.id, updateMissionaryInput);
  }

  @Mutation(() => Missionary)
  removeMissionary(@Args('id', { type: () => Int }) id: number) {
    return this.missionaryService.remove(id);
  }
}
