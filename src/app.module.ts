import { Module } from '@nestjs/common';
import { databaseProviders, mongooseModule, sequelizeModule } from './database/database.providers';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './app/modules/users/users.module';
import { LoginModule } from './app/modules/login/login.module';
import { ProductsModule } from './app/modules/usersConfirmation/usersConfirmation.module';

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
