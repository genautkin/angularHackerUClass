import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-showcolor',
  templateUrl: './showcolor.component.html',
  styleUrls: ['./showcolor.component.css']
})
export class ShowcolorComponent implements OnInit {

  constructor(private cs:ColorService) { }

  color: string='red'

  ngOnInit(): void {
    // this.color=this.cs.getColor()
    // this.refreshColor()
    this.cs.colorStatus.subscribe((color)=>{
      this.color=color;
    })
  }



  // refreshColor(){
  //   setInterval(() => {
  //     this.color=this.cs.getColor()
  //   },5000)
  // }

}
