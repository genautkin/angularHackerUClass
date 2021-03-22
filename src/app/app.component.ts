import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  test="My Test"
  bc:string='yellow'

  ngOnInit(): void {
    var index=0
    setInterval(() =>{
      this.test+=index
      index++
    },1000)
    
  }

  
  title = 'project01032021';
}
