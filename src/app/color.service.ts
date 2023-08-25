import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  public colorSubject = new BehaviorSubject<string>(''); // Initial color

  setColor(color: string) {
    
    this.colorSubject.next(color);
    console.log(color)
  }

  getColor() {
    return this.colorSubject.asObservable();
  }
}
