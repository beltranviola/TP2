import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanListoPage } from './plan-listo.page';

describe('PlanListoPage', () => {
  let component: PlanListoPage;
  let fixture: ComponentFixture<PlanListoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanListoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
