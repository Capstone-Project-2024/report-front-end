import { TestBed } from '@angular/core/testing';

import { AptServiceService } from './apt-service.service';

describe('AptServiceService', () => {
  let service: AptServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AptServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
