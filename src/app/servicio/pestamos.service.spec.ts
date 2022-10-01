import { TestBed } from '@angular/core/testing';

import { PestamosService } from './pestamos.service';

describe('PestamosService', () => {
  let service: PestamosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PestamosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
