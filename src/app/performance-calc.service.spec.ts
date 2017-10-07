import { TestBed, inject } from '@angular/core/testing';

import { PerformanceCalcService } from './performance-calc.service';

describe('PerformanceCalcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerformanceCalcService]
    });
  });

  it('should be created', inject([PerformanceCalcService], (service: PerformanceCalcService) => {
    expect(service).toBeTruthy();
  }));
});
