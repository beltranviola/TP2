import { TestBed } from '@angular/core/testing';

import { LocalComercialDatosService } from './local-comercial-datos.service';

describe('LocalComercialDatosService', () => {
  let service: LocalComercialDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalComercialDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
