import { Module } from '@nestjs/common';
import { ProductsService } from './usersConfirmation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersConfirmation, UsersConfirmationSchema } from './schema/usersConfirmation.schema'

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
