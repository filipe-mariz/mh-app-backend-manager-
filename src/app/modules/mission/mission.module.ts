import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

import { DatabaseModule } from 'src/database/database.module';
import { MissionService } from './mission.service';
import { MissionResolver } from './mission.resolver';
import { mission } from './entities/mission.entity';
import { MissionDatabase } from './database/mission.database';
import { MissionRepository } from './database/mission.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([mission]),
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, '../../../protos/auth.proto'),
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  providers: [
    MissionResolver,
    MissionService,
    {
      provide: 'MISSION_REPOSITORY',
      useValue: mission,
    },
    {
      provide: MissionDatabase,
      useClass: MissionRepository
    }
  ],
  exports: [SequelizeModule]

})
export class MissionModule {}