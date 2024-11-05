import { UseGuards } from '@nestjs/common'
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { users } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { LoginUser } from './entities/login.entity';
import { AuthorizationToken } from './entities/returnLogin.entity';
import { AuthGuard } from 'src/app/middlewares/auth/auth.guard';

@Resolver(() => users)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Mutation(() => users)
  public createUser(@Args('input') body: CreateUserInput) {
    return this.userService.create(body);
  }

  @Mutation(() => AuthorizationToken)
  public loginUser(@Args('login') login: LoginUser) {
    return this.userService.login(login)
  }

  @UseGuards(AuthGuard)
  @Query(() => [users])
  public findAllUsers() {
    return this.userService.findAll();
  }

  @Query(() => users)
  public findOneUser(@Args('id', { type: () => Int }) id: number) {
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
