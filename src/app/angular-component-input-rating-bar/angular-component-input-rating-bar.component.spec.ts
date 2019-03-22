import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentInputRatingBarComponent } from './angular-component-input-rating-bar.component';

describe('AngularComponentInputRatingBarComponent', () => {
  let component: AngularComponentInputRatingBarComponent;
  let fixture: ComponentFixture<AngularComponentInputRatingBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponentInputRatingBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentInputRatingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
