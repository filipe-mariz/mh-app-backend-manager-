import { Module } from '@nestjs/common';
import { databaseProviders, mongooseModule, sequelizeModule } from './database/database.providers';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './app/modules/users/modules/usersConfirmation.module';
import { UsersModule } from './app/modules/users/modules/users.module';
import { LoginModule } from './app/modules/users/modules/login.module';

@Module({
  imports: [
    sequelizeModule,
    mongooseModule,
    UsersModule,
    LoginModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders
  ]
})

export class AppModule {}
