import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HospedajePage } from './hospedaje.page';

describe('HospedajePage', () => {
  let component: HospedajePage;
  let fixture: ComponentFixture<HospedajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HospedajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
