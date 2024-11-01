import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import * as bcrypt from 'bcrypt';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { users } from './entities/user.entity';
import { QueryData } from 'src/utils/global/globalInterface';

@Injectable()
export class UserService {
  private readonly repository = this.usersRepository.scope('defaultOptions');

  constructor(
    @InjectModel(users)
    private readonly usersRepository: typeof users,
  ) { };

  public async create(createUserInput: CreateUserInput) {
    if (createUserInput.password !== createUserInput.passwordConfirmation) {
      return {
        code: 'PASSWORD_NOT_MATCH',
        message: 'password and passworConfirmation does not same'
      }
    }

    const user: ICreateUserResponse = await this.repository.create({
      name: createUserInput.name,
      email: createUserInput.email,
      cpf: createUserInput.cpf,
      whatsapp: createUserInput.whatsapp,
      password: bcrypt.hashSync(createUserInput.password, 10),
    });

    return user;
  }

  findAll() {
    return this.repository.findAll<users>();
  }

  findOne(filter: QueryData) {
    return this.repository.findOne<users>({
      where: { ...filter }
    });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
