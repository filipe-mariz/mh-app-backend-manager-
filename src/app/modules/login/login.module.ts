import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { api_tokens } from './entities/login.entity'
import { apiTokenProviders } from './entities/login.providers';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    SequelizeModule.forFeature([api_tokens]),
    DatabaseModule,
    UsersModule
  ],
  controllers: [LoginController],
  providers: [
    LoginService, ...apiTokenProviders
  ],
  exports: [SequelizeModule]
})
export class LoginModule {};
