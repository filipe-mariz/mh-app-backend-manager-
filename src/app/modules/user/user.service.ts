import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import * as bcrypt from 'bcrypt';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { users } from './entities/user.entity';
import { QueryData } from 'src/utils/global/globalInterface';
import { UserDatabase } from './database/user.database';

@Injectable()
export class UserService {
  private readonly repository = this.usersRepository.scope('defaultOptions');

  constructor(
    @InjectModel(users)
    private readonly usersRepository: typeof users,

    private database: UserDatabase
  ) { };

  public async create(createUserInput: CreateUserInput) {
    if (createUserInput.password !== createUserInput.passwordConfirmation) {
      return {
        code: 'PASSWORD_NOT_MATCH',
        message: 'password and passworConfirmation does not same'
      }
    }

    const user = await this.database.create({
      name: createUserInput.name,
      email: createUserInput.email,
      cpf: createUserInput.cpf,
      whatsapp: createUserInput.whatsapp,
      password: bcrypt.hashSync(createUserInput.password, 10),
      passwordConfirmation: ''
    });

    return user;
  }

  public findAll() {
    return this.repository.findAll<users>();
  }

  public findOne(filter: QueryData) {
    return this.repository.findOne<users>({
      where: { id: filter.id }
    });
  }

  public update(filter: QueryData, updateUserInput: UpdateUserInput) {
    return this.repository.update<users>(updateUserInput, {
      where: { id: filter.id },
    });
  }

  public remove(filter: QueryData) {
    return this.repository.destroy<users>({
      where: { id: filter.id }
    });
  }
}
