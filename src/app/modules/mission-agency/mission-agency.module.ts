import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from 'src/database/database.module';
import { join } from 'path';

import { MissionAgencyService } from './mission-agency.service';
import { MissionAgencyResolver } from './mission-agency.resolver';
import { agency } from './entities/mission-agency.entity';
import { AgencyDatabase } from './database/agency.database';
import { AgencyRepository } from './database/agency.repository';

@Module({
  imports: [
    SequelizeModule.forFeature([agency]),
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
    MissionAgencyResolver,
    MissionAgencyService,
    {
      provide: 'USERS_REPOSITORY',
      useValue: agency,
    },
    {
      provide: AgencyDatabase,
      useClass: AgencyRepository
    }
  ],
  exports: [SequelizeModule]
})
export class MissionAgencyModule {}
