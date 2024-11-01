import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { users } from './entities/user.entity';
import { UsersRepository } from './database/database.repository';
import { UserDatabase } from './database/user.database';

@Module({
  imports: [
    SequelizeModule.forFeature([users]),
    DatabaseModule,
  ],
  providers: [
    UserResolver,
    UserService,
    {
      provide: 'USERS_REPOSITORY',
      useValue: users,
    },
    {
      provide: UserDatabase,
      useClass: UsersRepository
    }
  ],
  exports: [SequelizeModule]
})
export class UserModule {}
