import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularOverviewFontSizeEditorComponent } from './angular-overview-font-size-editor.component';

describe('AngularOverviewFontSizeEditorComponent', () => {
  let component: AngularOverviewFontSizeEditorComponent;
  let fixture: ComponentFixture<AngularOverviewFontSizeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularOverviewFontSizeEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularOverviewFontSizeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
