import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { users } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => users)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => users)
  createUser(@Args('body') body: CreateUserInput) {
    return this.userService.create(body);
  }

  @Query(() => [users], { name: 'user' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => users, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => users)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => users)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
