import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArComponent } from './ar/ar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ColorPickerModule } from './color-picker/color-picker.module'
import { ColorService } from './color.service';
@NgModule({
  declarations: [
    AppComponent,
    ArComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ColorPickerModule
  ],
 // providers: [ColorService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
