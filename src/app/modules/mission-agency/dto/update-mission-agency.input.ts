import { CreateMissionAgencyInput } from './create-mission-agency.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMissionAgencyInput extends PartialType(CreateMissionAgencyInput) {
  @Field(() => Int)
  id: number;
}
