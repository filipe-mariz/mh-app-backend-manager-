import { Test, TestingModule } from '@nestjs/testing';
import { MissionAgencyResolver } from './mission-agency.resolver';
import { MissionAgencyService } from './mission-agency.service';

describe('MissionAgencyResolver', () => {
  let resolver: MissionAgencyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionAgencyResolver, MissionAgencyService],
    }).compile();

    resolver = module.get<MissionAgencyResolver>(MissionAgencyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
