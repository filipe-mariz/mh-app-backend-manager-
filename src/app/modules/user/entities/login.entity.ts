import { ObjectType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginUser {
    @Field()
    authType: string;

    @Field()
    userId: string;

    @Field()
    password: string;
}
