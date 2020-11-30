import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorsPlanComponent } from './sponsors-plan.component';

describe('SponsorsPlanComponent', () => {
  let component: SponsorsPlanComponent;
  let fixture: ComponentFixture<SponsorsPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsorsPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
