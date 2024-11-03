import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { users } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => users)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => users)
  public createUser(@Args('body') body: CreateUserInput) {
    return this.userService.create(body);
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
