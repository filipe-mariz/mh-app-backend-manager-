import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MissionAgencyService } from './mission-agency.service';
import { agency } from './entities/mission-agency.entity';
import { CreateMissionAgencyInput } from './dto/create-mission-agency.input';
import { UpdateMissionAgencyInput } from './dto/update-mission-agency.input';
import { AuthGuard } from 'src/app/middlewares/auth/auth.guard';

@UseGuards(AuthGuard)
@Resolver(() => agency)
export class MissionAgencyResolver {
  constructor(private readonly missionAgencyService: MissionAgencyService) { }

  @Mutation(() => agency)
  public createMissionAgency(@Args('body') body: CreateMissionAgencyInput) {
    return this.missionAgencyService.create(body);
  }

  @Query(() => [agency])
  public findAllAgency() {
    return this.missionAgencyService.findAll();
  }

  @Query(() => agency)
  public findOneAgency(@Args('id') id: string) {
    return this.missionAgencyService.findOne({ id });
  }

  @Mutation(() => agency)
  public updateMissionAgency(@Args('updateMissionAgencyInput') updateMissionAgencyInput: UpdateMissionAgencyInput) {
    return this.missionAgencyService.update({ id: updateMissionAgencyInput.id }, updateMissionAgencyInput);
  }

  @Mutation(() => agency)
  public removeMissionAgency(@Args('id', { type: () => Int }) id: number) {
    return this.missionAgencyService.remove({ id });
  }
}
