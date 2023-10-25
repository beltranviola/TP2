import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovilidadPage } from './movilidad.page';

describe('MovilidadPage', () => {
  let component: MovilidadPage;
  let fixture: ComponentFixture<MovilidadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovilidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
