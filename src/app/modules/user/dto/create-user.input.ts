import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  cpf: string;

  @Field()
  whatsapp: string;

  @Field()
  password: string;

  @Field()
  passwordConfirmation: string;
}
