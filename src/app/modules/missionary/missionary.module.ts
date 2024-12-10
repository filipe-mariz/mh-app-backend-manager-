import { Module } from '@nestjs/common';
import { MissionaryService } from './missionary.service';
import { MissionaryResolver } from './missionary.resolver';

@Module({
  providers: [MissionaryResolver, MissionaryService]
})
export class MissionaryModule {}
