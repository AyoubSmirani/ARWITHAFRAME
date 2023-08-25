import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ColorService } from '../color.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit,AfterViewInit{


  ngAfterViewInit(): void {
    console.log(this.color)
  }
  ngOnInit(): void {
    console.log(this.color)
  }
  public hue!: string
  @Input() public color: string ='green'


 

  constructor(private colorService: ColorService) {}

  setColor(newColor: string) {
    this.color = newColor;
    this.colorService.setColor(newColor);
  }




  updateColor(newColor: string) {
    this.color = newColor;
    this.setColor(newColor)
  }
  onColorChange(newColor: string) {
    this.color = newColor;
  }

  
 



}
