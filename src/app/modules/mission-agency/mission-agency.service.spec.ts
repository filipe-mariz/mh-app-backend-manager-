import { Test, TestingModule } from '@nestjs/testing';
import { MissionAgencyService } from './mission-agency.service';

describe('MissionAgencyService', () => {
  let service: MissionAgencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionAgencyService],
    }).compile();

    service = module.get<MissionAgencyService>(MissionAgencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
