import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersConfirmation, UsersConfirmationSchema } from '../schema/usersConfirmation.schema'
import { ProductsService } from '../services/usersConfirmation.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: UsersConfirmation.name,
      schema: UsersConfirmationSchema
    }])
  ],
  providers: [ProductsService]
})
export class ProductsModule {}
