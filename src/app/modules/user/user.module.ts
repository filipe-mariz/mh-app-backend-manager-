import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';

import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { users } from './entities/user.entity';
import { UsersRepository } from './database/database.repository';
import { UserDatabase } from './database/user.database';

@Module({
  imports: [
    SequelizeModule.forFeature([users]),
    DatabaseModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, 'protos/auth.proto'),
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  providers: [
    UserResolver,
    UserService,
    {
      provide: 'USERS_REPOSITORY',
      useValue: users,
    },
    {
      provide: UserDatabase,
      useClass: UsersRepository
    }
  ],
  exports: [SequelizeModule]
})
export class UserModule {}
