import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularOverviewFontSizeEditorComponent } from './angular-overview-font-size-editor/angular-overview-font-size-editor.component';
import { AngularOverviewViewPetComponent } from './angular-overview-view-pet/angular-overview-view-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularOverviewFontSizeEditorComponent,
    AngularOverviewViewPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
