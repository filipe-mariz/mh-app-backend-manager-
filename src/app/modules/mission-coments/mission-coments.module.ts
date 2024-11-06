import { Module } from '@nestjs/common';
import { MissionComentsService } from './mission-coments.service';
import { MissionComentsResolver } from './mission-coments.resolver';

@Module({
  providers: [MissionComentsResolver, MissionComentsService]
})
export class MissionComentsModule {}
