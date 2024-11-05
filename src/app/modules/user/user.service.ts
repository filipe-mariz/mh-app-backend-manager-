import { Injectable, Inject } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import * as bcrypt from 'bcrypt';
import { v1 as uuidv1 } from 'uuid'

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { users } from './entities/user.entity';
import { CreateGrpcClientDto, IAuthProto, QueryData } from 'src/utils/global/globalInterface';
import { UserDatabase } from './database/user.database';

@Injectable()
export class UserService {
  private authService: IAuthProto;

  constructor(
    @Inject('AUTH_SERVICE')
    private readonly client: ClientGrpc,
    private readonly database: UserDatabase,
  ) {
    this.authService = this.client.getService('AuthenticationService');
  };

  public async create(createUserInput: CreateUserInput) {
    if (createUserInput.password !== createUserInput.passwordConfirmation) {
      return {
        code: 'PASSWORD_NOT_MATCH',
        message: 'password and passworConfirmation does not same'
      }
    }

    return this.database.create({
      id: uuidv1(),
      name: createUserInput.name,
      email: createUserInput.email,
      cpf: createUserInput.cpf,
      whatsapp: createUserInput.whatsapp,
      password: bcrypt.hashSync(createUserInput.password, 10),
    });
  }

  public async login(logindData: CreateGrpcClientDto) {
    return this.authService.Create({
      siglaApp: 'mh1-mb',
      authType: logindData.authType,
      password: logindData.password,
      userId: logindData.userId,
    });
  }

  public findAll() {
    return this.database.findAll<users>();
  }

  public findOne(filter: QueryData) {
    return this.database.findOne<users>(filter);
  }

  public update(filter: QueryData, updateUserInput: UpdateUserInput) {
    return this.database.update<users>(updateUserInput, filter);
  }

  public remove(filter: QueryData) {
    return this.database.remove<users>(filter);
  }
}
