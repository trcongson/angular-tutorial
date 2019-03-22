import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularOverviewFontSizeEditorComponent } from './angular-overview-font-size-editor/angular-overview-font-size-editor.component';
import { AngularOverviewViewPetComponent } from './angular-overview-view-pet/angular-overview-view-pet.component';
import { AngularOverviewCalculatorComponent } from './angular-overview-calculator/angular-overview-calculator.component';
import { from } from 'rxjs';
import { AngularComponentInputNameCardComponent } from './angular-component-input-name-card/angular-component-input-name-card.component';
import { AngularComponentInputProgressBarComponent } from './angular-component-input-progress-bar/angular-component-input-progress-bar.component';
import { AngularComponentInputPersonComponent } from './angular-component-input-person/angular-component-input-person.component';
import { AngularComponentInputListPersonComponent } from './angular-component-input-list-person/angular-component-input-list-person.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularOverviewFontSizeEditorComponent,
    AngularOverviewViewPetComponent,
    AngularOverviewCalculatorComponent,
    AngularComponentInputNameCardComponent,
    AngularComponentInputProgressBarComponent,
    AngularComponentInputPersonComponent,
    AngularComponentInputListPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
