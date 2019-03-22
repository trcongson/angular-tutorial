import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentInputPersonComponent } from './angular-component-input-person.component';

describe('AngularComponentInputPersonComponent', () => {
  let component: AngularComponentInputPersonComponent;
  let fixture: ComponentFixture<AngularComponentInputPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponentInputPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentInputPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
