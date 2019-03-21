import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularOverviewFontSizeEditorComponent } from './angular-overview-font-size-editor/angular-overview-font-size-editor.component';
import { AngularOverviewViewPetComponent } from './angular-overview-view-pet/angular-overview-view-pet.component';
import { AngularOverviewCalculatorComponent } from './angular-overview-calculator/angular-overview-calculator.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AngularOverviewFontSizeEditorComponent,
    AngularOverviewViewPetComponent,
    AngularOverviewCalculatorComponent
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
