import { Test, TestingModule } from '@nestjs/testing';
import { MissionComentsResolver } from './mission-coments.resolver';
import { MissionComentsService } from './mission-coments.service';

describe('MissionComentsResolver', () => {
  let resolver: MissionComentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionComentsResolver, MissionComentsService],
    }).compile();

    resolver = module.get<MissionComentsResolver>(MissionComentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
