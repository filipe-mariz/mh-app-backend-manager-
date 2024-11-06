import { Test, TestingModule } from '@nestjs/testing';
import { MissionComentsService } from './mission-coments.service';

describe('MissionComentsService', () => {
  let service: MissionComentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MissionComentsService],
    }).compile();

    service = module.get<MissionComentsService>(MissionComentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
