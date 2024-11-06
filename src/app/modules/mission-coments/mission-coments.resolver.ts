import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MissionComentsService } from './mission-coments.service';
import { mission_coments } from './entities/mission-coment.entity';
import { CreateMissionComentInput } from './dto/create-mission-coment.input';

@Resolver(() => mission_coments)
export class MissionComentsResolver {
  constructor(private readonly missionComentsService: MissionComentsService) { }

  @Mutation(() => mission_coments)
  public createMissionComent(@Args('createMissionComentInput') createMissionComentInput: CreateMissionComentInput) {
    return this.missionComentsService.create(createMissionComentInput);
  }

  @Query(() => [mission_coments])
  public findAllComents(
    @Args('missionId') missionId: string
  ) {
    return this.missionComentsService.findAll();
  }
}
