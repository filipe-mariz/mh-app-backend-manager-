import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMissionAgencyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
