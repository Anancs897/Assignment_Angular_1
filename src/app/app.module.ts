import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { InputButtonComponent } from './input-button/input-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent,
    InputButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
