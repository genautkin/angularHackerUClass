import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowAndHideNavBarService } from 'src/app/services/show-and-hide-nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private navServ:ShowAndHideNavBarService,private router: Router, private route: ActivatedRoute) { }
  navBarStatus:boolean = true;
  ngOnInit(): void {
    this.navServ.data.subscribe(data => {
      this.navBarStatus=data
      console.log(data)
    })
    
  }

  goToShowColor(){
    this.router.navigate([`/showColor`], { relativeTo: this.route });
  }

}
