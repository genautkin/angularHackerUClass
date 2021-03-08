import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  menu:number
  bc:string='yellow'
  ngOnInit(): void {
  
  }

  showComp(num){
    this.menu=num
  }
  title = 'project01032021';
}
