import { Test, TestingModule } from '@nestjs/testing';
import { MissionaryResolver } from './missionary.resolver';
import { MissionaryService } from './missionary.service';

describe('MissionaryResolver', () => {
  let resolver: MissionaryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionaryResolver, MissionaryService],
    }).compile();

    resolver = module.get<MissionaryResolver>(MissionaryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
