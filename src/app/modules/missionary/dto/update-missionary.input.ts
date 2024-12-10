import { CreateMissionaryInput } from './create-missionary.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMissionaryInput extends PartialType(CreateMissionaryInput) {
  @Field(() => Int)
  id: number;
}
