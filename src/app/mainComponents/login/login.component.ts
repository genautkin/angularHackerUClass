import { Component, OnInit } from '@angular/core';
import { ShowAndHideNavBarService } from 'src/app/services/show-and-hide-nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private navServ:ShowAndHideNavBarService) { }
 

  ngOnInit(): void {
    this.navServ.hideNavBar()
  }

  ngOnDestroy(): void {
    this.navServ.showNavBar()
  }

}
