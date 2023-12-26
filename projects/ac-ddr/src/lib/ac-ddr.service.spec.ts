import { TestBed } from '@angular/core/testing';

import { AcDdrService } from './ac-ddr.service';

describe('AcDdrService', () => {
  let service: AcDdrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcDdrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
