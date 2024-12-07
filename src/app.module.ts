import { Module } from '@nestjs/common';
import { databaseProviders, mongooseModule, sequelizeModule } from './database/database.providers';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './app/modules/user/user.module';
import { AuthModule } from './app/middlewares/auth/auth.module';
import { MissionAgencyModule } from './app/modules/mission-agency/mission-agency.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/schema.gql',
      context: ({ req }) => ({ headers: req.headers })
    }),
    sequelizeModule,
    mongooseModule,
    UserModule,
    AuthModule,
    MissionAgencyModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders
  ]
})

export class AppModule {}
