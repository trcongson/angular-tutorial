import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentInputNameCardComponent } from './angular-component-input-name-card.component';

describe('AngularComponentInputNameCardComponent', () => {
  let component: AngularComponentInputNameCardComponent;
  let fixture: ComponentFixture<AngularComponentInputNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponentInputNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentInputNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
