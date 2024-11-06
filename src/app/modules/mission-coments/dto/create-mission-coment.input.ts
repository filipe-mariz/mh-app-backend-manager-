import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMissionComentInput {
  @Field()
  text: string;

  @Field()
  user_id?: string;

  @Field()
  mission_id?: string;
}
