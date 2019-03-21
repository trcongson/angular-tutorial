import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOverviewCalculatorComponent } from './angular-overview-calculator.component';

describe('AngularOverviewCalculatorComponent', () => {
  let component: AngularOverviewCalculatorComponent;
  let fixture: ComponentFixture<AngularOverviewCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOverviewCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOverviewCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
