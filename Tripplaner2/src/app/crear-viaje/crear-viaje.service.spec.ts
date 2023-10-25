import { TestBed } from '@angular/core/testing';

import { CrearViajeService } from './crear-viaje.service';

describe('CrearViajeService', () => {
  let service: CrearViajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearViajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
