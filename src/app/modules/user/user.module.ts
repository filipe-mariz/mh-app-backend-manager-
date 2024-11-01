import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { SequelizeModule } from '@nestjs/sequelize';
import { users } from './entities/user.entity';

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
    }
  ],
  exports: [SequelizeModule]
})
export class UserModule {}
