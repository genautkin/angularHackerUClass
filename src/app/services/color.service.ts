import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  color:string='black'
  private colorStatusPrivare = new BehaviorSubject<string>(this.color)
  colorStatus = this.colorStatusPrivare.asObservable();

  constructor() { }

  

  getColor(){
    return this.color
  }

  setColor(color:string){

    this.colorStatusPrivare.next(color)
  }
}


