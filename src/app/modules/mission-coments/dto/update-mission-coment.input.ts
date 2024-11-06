import { CreateMissionComentInput } from './create-mission-coment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMissionComentInput extends PartialType(CreateMissionComentInput) {
  @Field(() => Int)
  id: number;
}
