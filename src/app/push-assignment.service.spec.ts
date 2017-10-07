import { TestBed, inject } from '@angular/core/testing';

import { PushAssignmentService } from './push-assignment.service';

describe('PushAssignmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushAssignmentService]
    });
  });

  it('should be created', inject([PushAssignmentService], (service: PushAssignmentService) => {
    expect(service).toBeTruthy();
  }));
});
