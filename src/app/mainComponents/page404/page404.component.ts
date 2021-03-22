import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShowAndHideNavBarService } from 'src/app/services/show-and-hide-nav-bar.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit,OnDestroy {

  constructor(private navServ:ShowAndHideNavBarService) { }
 

  ngOnInit(): void {
    this.navServ.hideNavBar()
  }

  ngOnDestroy(): void {
    this.navServ.showNavBar()
  }

}
