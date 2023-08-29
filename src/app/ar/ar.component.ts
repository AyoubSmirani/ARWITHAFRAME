import { Component, ElementRef, OnInit, ViewChild,NgZone, ViewContainerRef, Input } from '@angular/core';
import { ColorService } from '../color.service';
//import { Cmyk, ColorPickerService } from 'ngx-color-picker';

@Component({
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.css']
})
export class ArComponent {
  /* arScene:any; 
     //for keeping track of scores
      player1Score:number = 0;
      player2Score:number = 0;
      intervalLength:number = 20;
     //for tracking border collisions
      maxX:number = 1;
      maxY:number = 1;
      maxZ:number = 1;
      minX:number = -1;
      minY:number = -1;
     minZ:number = -1;
      bumperWidth:number = 0.1;

     //for tracking border color cooldown
      topBumperCoolDown:number = 0;
    rightBumperCoolDown:number = 0;
     leftBumperCoolDown:number = 0;
      bottomBumperCoolDown:number = 0;
    topPaddleCoolDown:number = 0;
      bottomPaddleCoolDown:number = 0;
  myBox: HTMLElement | null | undefined;
  myText: HTMLElement | null | undefined;
  mySphere: HTMLElement | null | undefined;
  leftBumper: HTMLElement | null | undefined;
  rightBumper: HTMLElement | null | undefined;
  topBumper: HTMLElement | null | undefined;
  bottomBumper: HTMLElement | null | undefined;
  topPaddle: HTMLElement | null | undefined;
  bottomPaddle: HTMLElement | null | undefined;
  ////////////////////////////
  bottomPaddleVector:any = {};
  mySphereVector:any = {};
  topPaddleVector:any = {};
  //////////////////////////
  topPaddleProperties:any = {};
  bottomPaddleProperties:any = {};
  mySphereProperties:any = {};
  //////////////////////////////////
  myBoxPosition:any = {};
  mySpherePosition:any = {};
  myTextPosition:any = {};
  topPaddlePosition:any = {};
  bottomPaddlePosition:any = {};


 
  model:string | undefined 

  changeModel(model:string) :void{
    this.model = model
    console.log(this.model)
  }
  
  modelScale: string = '0.1 0.1 0.1'; // Initial scale value

  incrementScale() {
    // Increment the scale by a certain factor
    const scaleFactor = 0.1;
    const newScale = this.calculateNewScale(scaleFactor);
    this.modelScale = newScale;
  }

  decrementScale() {
    // Decrement the scale by a certain factor
    const scaleFactor = -0.1;
    const newScale = this.calculateNewScale(scaleFactor);
    this.modelScale = newScale;
  }

  private calculateNewScale(scaleFactor: number): string {
    const currentScale = this.modelScale.split(' ').map(parseFloat);
    const newScale = currentScale.map(val => (val + scaleFactor).toFixed(1)).join(' ');
    return newScale;
  }
   constructor(private el: ElementRef) {}
 ngOnInit(): void {
  this.model = "#crate-obj"
 /* this.arScene =  this.el.nativeElement.querySelector('ar-scene')
  this.myBox = document.getElementById('myBox');      
         this.myText = document.getElementById('myText');      
         this.mySphere = document.getElementById('mySphere');        
         this.leftBumper = document.getElementById('leftBumper');
         this.rightBumper = document.getElementById('rightBumper');
         this.topBumper = document.getElementById('topBumper');
         this.bottomBumper = document.getElementById('bottomBumper');
         this.topPaddle = document.getElementById('topPaddle');
       this.bottomPaddle = document.getElementById('bottomPaddle');

          this.myBoxPosition.x = 0;
       this.myBoxPosition.y = 0;
       this.myBoxPosition.z = 0;
 
     this.mySpherePosition.x = 0;
     this.mySpherePosition.y = 0;
     this.mySpherePosition.z = 0;

     this.myTextPosition.x = 0;
     this.myTextPosition.y = 0;
     this.myTextPosition.z = 0;

     this.topPaddlePosition.x = 0;
     this.topPaddlePosition.y = 0.05;
     this.topPaddlePosition.z = -0.86;

     this.bottomPaddlePosition.x = 0;
     this.bottomPaddlePosition.y = 0.05;
     this.bottomPaddlePosition.z = 0.86;

     //initialize variables to track object properties
    
     this.topPaddleProperties.width = 0.1;
     this.topPaddleProperties.height = 0.1;
     this.topPaddleProperties.depth = 0.49;
   
       this.bottomPaddleProperties.width = 0.1;
       this.bottomPaddleProperties.height = 0.1;
       this.bottomPaddleProperties.depth = 0.49;
    
       this.mySphereProperties.radius = 0.05;

     //create variables to track movement vectors      
    
       this.mySphereVector.x = 0;
       this.mySphereVector.y = 0;
       this.mySphereVector.z = 0; 
 
       this.topPaddleVector.x = 0;
       this.topPaddleVector.y = 0;
       this.topPaddleVector.z = 0;
     
       this.bottomPaddleVector.x = 0;
       this.bottomPaddleVector.y = 0;
       this.bottomPaddleVector.z = 0;
         //pick a random number between 0.020 and 0.030 for both x and z vectors
         this.mySphereVector.x = ((Math.floor(Math.random() * 30) + 20) / 1000)
         this.mySphereVector.z = ((Math.floor(Math.random() * 30) + 20) / 1000)

       /*  setInterval(() => {
           
          //reset the colors of the bumpers
          if(this.leftBumperCoolDown > 0){
            this.leftBumperCoolDown = this.leftBumperCoolDown - 1;
          }
          else{
            this.leftBumper.setAttribute('color', 'blue');
          }
          if(this.rightBumperCoolDown > 0){
            this.rightBumperCoolDown = this.rightBumperCoolDown - 1;
          }
          else{
            this.rightBumper.setAttribute('color', 'blue');
          }

          if(this.topBumperCoolDown > 0){
            this.topBumperCoolDown = this.topBumperCoolDown - 1;
          }
          else{
            this.topBumper.setAttribute('color', 'purple');
          }
          if(this.bottomBumperCoolDown > 0){
            this.bottomBumperCoolDown = this.bottomBumperCoolDown - 1;
          }
          else{
            this.bottomBumper.setAttribute('color', 'green');
          }
          
          if(this.topPaddleCoolDown > 0){
            this.topPaddleCoolDown = this.topPaddleCoolDown - 1;
          }
          else{
            this.topPaddle.setAttribute('color', 'purple');
          }
          if(this.bottomPaddleCoolDown > 0){
            this.bottomPaddleCoolDown = this.bottomPaddleCoolDown - 1;
          }
          else{
            this.bottomPaddle.setAttribute('color', 'green');
          }

          //move the sphere
          this.mySpherePosition.x = this.mySpherePosition.x + this.mySphereVector.x;
          this.mySpherePosition.y = this.mySpherePosition.y + this.mySphereVector.y;
          this.mySpherePosition.z = this.mySpherePosition.z + this.mySphereVector.z;
          this.mySphere.setAttribute('position', this.mySpherePosition.x + ' ' + this.mySpherePosition.y + ' ' + this.mySpherePosition.z);
          //console.log("mySphere.getAttribute('position') == ", mySphere.getAttribute('position'));

          //randomly change the vectors of the paddles
          //top paddle
          var randomNumber = Math.floor(Math.random() * 30);
          if(randomNumber == 0){
            this.topPaddleVector.x = 0;
          }
          else if(randomNumber == 1){
            this.topPaddleVector.x = -0.02;
          }
          else if(randomNumber == 2){
            this.topPaddleVector.x = 0.02;
          }
          //bottom paddle
          randomNumber = Math.floor(Math.random() * 30);
          if(randomNumber == 0){
            this.bottomPaddleVector.x = 0;
          }
          else if(randomNumber == 1){
            this.bottomPaddleVector.x = -0.02;
          }
          else if(randomNumber == 2){
            this.bottomPaddleVector.x = 0.02;
          }

          //move the paddles
          this.topPaddlePosition.x = this.topPaddlePosition.x + this.topPaddleVector.x;
          this.topPaddlePosition.y = this.topPaddlePosition.y + this.topPaddleVector.y;
          this.topPaddlePosition.z = this.topPaddlePosition.z + this.topPaddleVector.z;
          this.bottomPaddlePosition.x = this.bottomPaddlePosition.x + this.bottomPaddleVector.x;
          this.bottomPaddlePosition.y = this.bottomPaddlePosition.y + this.bottomPaddleVector.y;
          this.bottomPaddlePosition.z = this.bottomPaddlePosition.z + this.bottomPaddleVector.z;          
          //if the paddle reaches the edge then reset it's location
          if(this.topPaddlePosition.x < (this.minX + (this.bumperWidth / 2) + (this.topPaddleProperties.depth / 2))){
            this.topPaddlePosition.x = this.minX + (this.bumperWidth / 2) + (this.topPaddleProperties.depth / 2);
          }
          if(this.topPaddlePosition.x > (this.maxX - (this.bumperWidth / 2) - (this.topPaddleProperties.depth / 2))){
            this.topPaddlePosition.x = (this.maxX - (this.bumperWidth / 2) - (this.topPaddleProperties.depth / 2));
          }
          if(this.bottomPaddlePosition.x < (this.minX + (this.bumperWidth / 2) + (this.topPaddleProperties.depth / 2))){
            this.bottomPaddlePosition.x = this.minX + (this.bumperWidth / 2) + (this.topPaddleProperties.depth / 2);
          }
          if(this.bottomPaddlePosition.x > (this.maxX - (this.bumperWidth / 2) - (this.topPaddleProperties.depth / 2))){
            this.bottomPaddlePosition.x = (this.maxX - (this.bumperWidth / 2) - (this.topPaddleProperties.depth / 2));
          }
          this.topPaddle.setAttribute('position', this.topPaddlePosition.x + ' ' + this.topPaddlePosition.y + ' ' + this.topPaddlePosition.z);
          this.bottomPaddle.setAttribute('position', this.bottomPaddlePosition.x + ' ' + this.bottomPaddlePosition.y + ' ' + this.bottomPaddlePosition.z);

          //update the text of the <span>
          this.myText.textContent = 'Ball Location: X = ' + this.mySpherePosition.x.toFixed(2) + ", Y = " + this.mySpherePosition.y.toFixed(2) + ", Z = " + this.mySpherePosition.z.toFixed(2);
          
          //detect collisions
          //if the sphere hits a boundary, then reverse it's vector
          if(this.mySpherePosition.x >= this.maxX){
            //console.log("The ball bounced off the max X border.")
            this. mySphereVector.x = this.mySphereVector.x * -1;
            this. rightBumper.setAttribute('color', 'yellow');
            this. rightBumperCoolDown = 10;
          }
          if(this.mySpherePosition.x <= this.minX){
            //console.log("The ball bounced off the min X border.")
            this. mySphereVector.x =this. mySphereVector.x * -1;
            this. leftBumper.setAttribute('color', 'yellow');
            this.leftBumperCoolDown = 10;
          }
          if(this.mySpherePosition.y >= this.maxY){
            //console.log("The ball bounced off the max Y border.")
            this. mySphereVector.y =this. mySphereVector.y * -1;
          }
          if(this.mySpherePosition.y <= this.minY){
            //console.log("The ball bounced off the min Y border.")
            this.mySphereVector.y = this.mySphereVector.y * -1;
          }
          if(this.mySpherePosition.z >= this.maxZ){
            //console.log("The ball bounced off the max Z border.")
            this.mySphereVector.z = this.mySphereVector.z * -1;
            this.bottomBumper.setAttribute('color', 'red');
            this.bottomBumperCoolDown = 10;
            //increment the player's score
            this.player2Score = this.player2Score + 1;
            console.log("Player 2 score == ", this.player2Score);
            this.player2ScoreText.setAttribute('text', 'value: Player 2: ' + this.player2Score + ' points');
          }
          if(this.mySpherePosition.z <= this.minZ){
            //console.log("The ball bounced off the min Z border.")
            this.mySphereVector.z = this.mySphereVector.z * -1;
            this.topBumper.setAttribute('color', 'red');
            this.topBumperCoolDown = 10;
            //increment the player's score
            this.player1Score = this.player1Score + 1;
            console.log("Player 1 score == ", this.player1Score);
            this.player1ScoreText.setAttribute('text', 'value: Player 1: ' + this.player1Score + ' points');
          }
          //if the sphere hits a paddle, then reverse it's vector
          //top paddle
          if(
            ((this.mySpherePosition.x) > (this.topPaddlePosition.x + this.mySphereProperties.radius - (this.topPaddleProperties.depth / 2)))
            && ((this.mySpherePosition.x + this.mySphereProperties.radius) < (this.topPaddlePosition.x + (this.topPaddleProperties.depth / 2)))
            && ((this.mySpherePosition.z + this.mySphereProperties.radius) > (this.topPaddlePosition.z - (this.topPaddleProperties.height / 2)))
            && ((this.mySpherePosition.z + this.mySphereProperties.radius) < (this.topPaddlePosition.z + (this.topPaddleProperties.height / 2)))
            ){
            //console.log("The ball bounced off the top paddle.")
            this.mySphereVector.z = this.mySphereVector.z * -1;
            this.topPaddle.setAttribute('color', 'yellow');
            this.topPaddleCoolDown = 10;
          } 
          //bottom paddle
          if(
            ((this.mySpherePosition.x) > (this.bottomPaddlePosition.x + this.mySphereProperties.radius - (this.bottomPaddleProperties.depth / 2)))
            && ((this.mySpherePosition.x + this.mySphereProperties.radius) < (this.bottomPaddlePosition.x + (this.bottomPaddleProperties.depth / 2)))
            && ((this.mySpherePosition.z + this.mySphereProperties.radius) > (this.bottomPaddlePosition.z - (this.bottomPaddleProperties.height / 2)))
            && ((this.mySpherePosition.z + this.mySphereProperties.radius) < (this.bottomPaddlePosition.z + (this.bottomPaddleProperties.height / 2)))
            ){
            //console.log("The ball bounced off the bottom paddle.")
            this.mySphereVector.z = mySphereVector.z * -1;
            this.bottomPaddle.setAttribute('color', 'yellow');
            this.bottomPaddleCoolDown = 10;
          } 
          
        }, this.intervalLength);

 }*/



 @ViewChild('modelContainer', { static: false })
  modelContainer!: ElementRef;
  
 private baseScale = 0.1;
 private scaleFactor = 0.05;
 public modelSrc = '/assets/FinalBaseMesh.obj';
 private currentModel: any = null; // Hold a reference to the current model

 ngAfterViewInit() {
   this.loadModel();
 }

 private loadModel() {
   if (this.currentModel) {
     // Remove the current model if it exists
     this.modelContainer.nativeElement.removeChild(this.currentModel);
   }
  
   // Create a new model
   const newModel = document.createElement('a-obj-model');
   /*const three = this.modelContainer.nativeElement.querySelector('a-entity').sceneEl.object3D;
   three.getObject3D('light');
   console.log(three)*/
   newModel.setAttribute('src', `#current-model`);
   newModel.setAttribute('position', '0 0 0');
   newModel.setAttribute('rotation', '-90 -0 0');
   newModel.setAttribute('scale', this.baseScale.toString());
   newModel.setAttribute('material', `opacity: 0.9; side: double; color: ${this.color};`);
 //  newModel.setAttribute('light', "color: #AFA; intensity: 1.5");
   
   // Append the new model to the container
   this.modelContainer.nativeElement.appendChild(newModel);
   this.currentModel = newModel;
 }

 private updateModelScale(scale: number) {
   if (this.currentModel) {
     this.currentModel.setAttribute('scale', `${scale} ${scale} ${scale}`);
   }
 }

 incrementScale() {
   this.baseScale += this.scaleFactor;
   this.updateModelScale(this.baseScale);
 }

 decrementScale() {
   this.baseScale -= this.scaleFactor;
   this.updateModelScale(this.baseScale);
 }

 changeModelSrc() {
   this.modelSrc = '/assets/trees9.obj';
   this.loadModel(); // Load the new model
 }
 changeModelSrc2() {
  this.modelSrc = '/assets/FinalBaseMesh.obj';
  
    this.loadModel(); // Load the new model

}



changeColortOWHITE(){
  this.colorService.getColor().subscribe(newColor => {
    this.color = newColor; // Update the color in the AR component
    
  });
  this.loadModel();
}
//color: string = 'green';

constructor(private colorService: ColorService) {}

ngOnInit() {
  this.colorService.getColor().subscribe(newColor => {
    this.color = newColor;
  });
}

updateColor(newColor: string) {
  this.color = newColor;
  
}

public hue!: string
 public color: string ='green'
// color picker

/*public toggle: boolean = false;

public rgbaText: string = 'rgba(165, 26, 214, 0.2)';

public colorList = [
  { key: "flame", value: "#e45a33", friendlyName: "Flame" },
  {key: "orange", value: "#fa761e", friendlyName: "Orange" },
  {key: "infrared",     value: "#ef486e", friendlyName: "Infrared" },
  {key: "male",       value: "#4488ff", friendlyName: "Male Color" },
  {key: "female",     value: "#ff44aa", friendlyName: "Female Color" },
  {key: "paleyellow",    value: "#ffd165", friendlyName: "Pale Yellow" },
  {key: "gargoylegas",  value: "#fde84e", friendlyName: "Gargoyle Gas" },
  {key: "androidgreen",   value: "#9ac53e", friendlyName: "Android Green" },
  {key: "carribeangreen",    value: "#05d59e", friendlyName: "Carribean Green" },
  {key: "bluejeans",    value: "#5bbfea", friendlyName: "Blue Jeans" },
  {key: "cyancornflower",    value: "#1089b1", friendlyName: "Cyan Cornflower" },
  {key: "warmblack",    value: "#06394a", friendlyName: "Warm Black" },
];


public presetValues : string[] = [];

public selectedColor: string = 'color1';

public cmykColor: Cmyk = new Cmyk(0, 0, 0, 0);

constructor(public vcRef: ViewContainerRef, private cpService: ColorPickerService) {
  this.presetValues = this.getColorValues();
}

getColorValues(){
return this.colorList.map(c => c.value);
}


public onEventLog(event: string, data: any): void {
  console.log(event, data);
}

public onChangeColorCmyk(color: string): Cmyk {
  const hsva = this.cpService.stringToHsva(color);

  if (hsva) {
    const rgba = this.cpService.hsvaToRgba(hsva);

    return this.cpService.rgbaToCmyk(rgba);
  }

  return new Cmyk(0, 0, 0, 0);
}

public onChangeColorHex8(color: string): string {
  const hsva = this.cpService.stringToHsva(color, true);

  if (hsva) {
    return this.cpService.outputFormat(hsva, 'rgba', null);
  }

  return '';
}
*/
}
