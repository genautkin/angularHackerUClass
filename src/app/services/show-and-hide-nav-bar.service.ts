import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowAndHideNavBarService {


  private showNBar = new BehaviorSubject<boolean>(true);
  data = this.showNBar.asObservable();

  constructor() { }

  hideNavBar(){
    this.showNBar.next(false)
  }

  showNavBar(){
    this.showNBar.next(true)
  }


}
