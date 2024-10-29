import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersProviders } from './entities/users.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { users } from './entities/user.entity';
import { DatabaseModule } from '../../../database/database.module';
import { ProductsService } from '../usersConfirmation/usersConfirmation.service';
import { ProductsModule } from '../usersConfirmation/usersConfirmation.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersConfirmation, UsersConfirmationSchema } from '../usersConfirmation/schema/usersConfirmation.schema';

@Module({
  imports: [
    SequelizeModule.forFeature([users]),
    DatabaseModule,
    MongooseModule.forFeature([{
      name: UsersConfirmation.name,
      schema: UsersConfirmationSchema
    }])
  ],
  controllers: [UsersController],
  providers: [
    ProductsModule,
    UsersService,
    ...usersProviders,
    ProductsService
  ],
  exports: [SequelizeModule]
})

export class UsersModule { };