import { Injectable } from '@nestjs/common';
import { UserDatabase } from './user.database';
import { BaseRepository } from 'src/app/base/base.repository';
import { InjectModel } from '@nestjs/sequelize';
import { users } from '../entities/user.entity';

@Injectable()
export class UsersRepository extends BaseRepository implements UserDatabase {
  constructor(
    @InjectModel(users) usersRepository: typeof users
  ) {
    super(usersRepository, 'USERS')
  }
}
