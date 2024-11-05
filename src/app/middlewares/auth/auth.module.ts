import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
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
  providers: [AuthGuard]
})
export class AuthModule { }