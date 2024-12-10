import { Module } from '@nestjs/common';
import { databaseProviders, mongooseModule, sequelizeModule } from './database/database.providers';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './app/modules/user/user.module';
import { AuthModule } from './app/middlewares/auth/auth.module';
import { MissionAgencyModule } from './app/modules/mission-agency/mission-agency.module';
import { MissionModule } from './app/modules/mission/mission.module';
import { MissionComentsModule } from './app/modules/mission-coments/mission-coments.module';
import { MissionaryModule } from './app/modules/missionary/missionary.module';

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
    MissionAgencyModule,
    MissionModule,
    MissionComentsModule,
    MissionaryModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders
  ]
})

export class AppModule {}
