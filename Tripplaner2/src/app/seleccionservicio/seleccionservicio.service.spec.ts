import { TestBed } from '@angular/core/testing';

import { SeleccionservicioService } from './seleccionservicio.service';

describe('SeleccionservicioService', () => {
  let service: SeleccionservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeleccionservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
