import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorService } from '../color.service';



@NgModule({
  declarations: [
    ColorPickerComponent,
    ColorSliderComponent,
    ColorPaletteComponent
  ],
  providers:[ColorService], 
  imports: [
    CommonModule
  ],
  exports: [ColorPickerComponent],
})
export class ColorPickerModule { }
