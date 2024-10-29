import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from 'src/database/database.module';
import { UsersController } from '../controllers/users.controller';
import { users } from '../entities/user.entity';
import { usersProviders } from '../entities/users.providers';
import { UsersConfirmation, UsersConfirmationSchema } from '../schema/usersConfirmation.schema';
import { UsersService } from '../services/users.service';
import { ProductsService } from '../services/usersConfirmation.service';
import { ProductsModule } from './usersConfirmation.module';

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