import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMissionComentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
