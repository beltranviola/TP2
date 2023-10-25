import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionservicioPage } from './seleccionservicio.page';

describe('SeleccionservicioPage', () => {
  let component: SeleccionservicioPage;
  let fixture: ComponentFixture<SeleccionservicioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionservicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
