import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMissionaryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
