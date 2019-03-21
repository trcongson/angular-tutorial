import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOverviewViewPetComponent } from './angular-overview-view-pet.component';

describe('AngularOverviewViewPetComponent', () => {
  let component: AngularOverviewViewPetComponent;
  let fixture: ComponentFixture<AngularOverviewViewPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOverviewViewPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOverviewViewPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
