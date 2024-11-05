import { Module } from '@nestjs/common';
import { MissionAgencyService } from './mission-agency.service';
import { MissionAgencyResolver } from './mission-agency.resolver';

@Module({
  providers: [MissionAgencyResolver, MissionAgencyService]
})
export class MissionAgencyModule {}
