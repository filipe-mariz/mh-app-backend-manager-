import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMissionInput {
  @Field()
  id: string;

  @Field()
  name: number;

  @Field()
  poster: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  requirements: string;

  @Field()
  startDate: string;

  @Field()
  endData: string;

  @Field()
  mission_agency_id?: string;
}
