import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalComercialDatosPage } from './local-comercial-datos.page';

describe('LocalComercialDatosPage', () => {
  let component: LocalComercialDatosPage;
  let fixture: ComponentFixture<LocalComercialDatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocalComercialDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
