import { Test, TestingModule } from '@nestjs/testing';
import { MissionaryService } from './missionary.service';

describe('MissionaryService', () => {
  let service: MissionaryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionaryService],
    }).compile();

    service = module.get<MissionaryService>(MissionaryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
