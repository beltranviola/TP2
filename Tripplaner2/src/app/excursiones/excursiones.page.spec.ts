import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExcursionesPage } from './excursiones.page';

describe('ExcursionesPage', () => {
  let component: ExcursionesPage;
  let fixture: ComponentFixture<ExcursionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExcursionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
