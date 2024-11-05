import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMissionAgencyInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cnpj: string;

  @Field({ nullable: true })
  bio: string;
}
