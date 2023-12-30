import { TestBed } from '@angular/core/testing';

import { AcConstantsService } from './ac-constants.service';

describe('AcConstantsService', () => {
  let service: AcConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
