import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponentInputListPersonComponent } from './angular-component-input-list-person.component';

describe('AngularComponentInputListPersonComponent', () => {
  let component: AngularComponentInputListPersonComponent;
  let fixture: ComponentFixture<AngularComponentInputListPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularComponentInputListPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponentInputListPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
