import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { users } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { LoginUser } from './entities/login.entity';
import { AuthorizationToken } from './entities/returnLogin.entity';

@Resolver(() => users)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => users)
  public createUser(@Args('body') body: CreateUserInput) {
    return this.userService.create(body);
  }

  @Mutation(() => AuthorizationToken)
  public loginUser(@Args('login') login: LoginUser) {
    return this.userService.login(login)
  }

  @Query(() => [users])
  public findAll() {
    return this.userService.findAll();
  }

  @Query(() => users)
  public findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne({ id });
  }

  @Mutation(() => users)
  public async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update({ id: updateUserInput.id }, updateUserInput);
  }

  @Mutation(() => [users])
  public removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove({ id });
  }
}
