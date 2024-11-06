import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { DatabaseModule } from 'src/database/database.module';
import { MissionComentsService } from './mission-coments.service';
import { MissionComentsResolver } from './mission-coments.resolver';
import { mission_coments } from './entities/mission-coment.entity';
import { MissionComentsDatabase } from './database/missionComents.database';
import { MissionComentsRepository } from './database/missionComents.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([mission_coments]),
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname,  '../../../protos/auth.proto'),
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  providers: [
    MissionComentsResolver,
    MissionComentsService,
    {
      provide: 'MISSION_COMENTS_REPOSITORY',
      useValue: mission_coments,
    },
    {
      provide: MissionComentsDatabase,
      useClass: MissionComentsRepository
    }
  ]
})
export class MissionComentsModule {}
