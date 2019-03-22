import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentInputProgressBarComponent } from './angular-component-input-progress-bar.component';

describe('AngularComponentInputProgressBarComponent', () => {
  let component: AngularComponentInputProgressBarComponent;
  let fixture: ComponentFixture<AngularComponentInputProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponentInputProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentInputProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
