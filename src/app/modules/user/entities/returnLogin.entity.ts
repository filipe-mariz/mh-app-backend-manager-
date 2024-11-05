import { ObjectType, Field} from '@nestjs/graphql';

@ObjectType()
export class AuthorizationToken {
  @Field()
  token: string
}
