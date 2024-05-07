import { TestBed } from '@angular/core/testing';

import { AptServiceService } from './api.service';

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
