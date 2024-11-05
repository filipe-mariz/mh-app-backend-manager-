import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MissionAgencyService } from './mission-agency.service';
import { agency } from './entities/mission-agency.entity';
import { CreateMissionAgencyInput } from './dto/create-mission-agency.input';
import { UpdateMissionAgencyInput } from './dto/update-mission-agency.input';

@Resolver(() => agency)
export class MissionAgencyResolver {
  constructor(private readonly missionAgencyService: MissionAgencyService) {}

  @Mutation(() => agency)
  createMissionAgency(@Args('createMissionAgencyInput') createMissionAgencyInput: CreateMissionAgencyInput) {
    return this.missionAgencyService.create(createMissionAgencyInput);
  }

  @Query(() => [agency], { name: 'missionAgency' })
  findAll() {
    return this.missionAgencyService.findAll();
  }

  @Query(() => agency, { name: 'missionAgency' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.missionAgencyService.findOne(id);
  }

  @Mutation(() => agency)
  updateMissionAgency(@Args('updateMissionAgencyInput') updateMissionAgencyInput: UpdateMissionAgencyInput) {
    return this.missionAgencyService.update(updateMissionAgencyInput.id, updateMissionAgencyInput);
  }

  @Mutation(() => agency)
  removeMissionAgency(@Args('id', { type: () => Int }) id: number) {
    return this.missionAgencyService.remove(id);
  }
}
