import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MissionService } from './mission.service';
import { mission } from './entities/mission.entity';
import { CreateMissionInput } from './dto/create-mission.input';
import { UpdateMissionInput } from './dto/update-mission.input';

@Resolver(() => mission)
export class MissionResolver {
  constructor(private readonly missionService: MissionService) {}

  @Mutation(() => mission)
  public createMission(@Args('createMissionInput') createMissionInput: CreateMissionInput) {
    return this.missionService.create(createMissionInput);
  }

  @Query(() => [mission])
  public findAllMissions() {
    return this.missionService.findAll();
  }

  @Query(() => [mission])
  public findAllMissionsByAgency(@Args('missionAgencyId') missionAgencyId: string) {
    return this.missionService.findAllMissionsByAgency({
      mission_agency_id: missionAgencyId
    });
  }

  @Query(() => mission)
  public findOneMission(
    @Args('id') id: string,
    @Args('missionAgencyId') missionAgencyId: string
  ) {
    return this.missionService.findOne(id, missionAgencyId);
  }

  @Mutation(() => mission)
  public updateMission(@Args('updateMissionInput') updateMissionInput: UpdateMissionInput) {
    return this.missionService.update(updateMissionInput.id, updateMissionInput);
  }

  @Mutation(() => mission)
  public removeMission(@Args('id') id: string) {
    return this.missionService.remove(id);
  }
}
