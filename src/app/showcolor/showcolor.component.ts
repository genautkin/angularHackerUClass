import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-showcolor',
  templateUrl: './showcolor.component.html',
  styleUrls: ['./showcolor.component.css']
})
export class ShowcolorComponent implements OnInit {

  constructor(private cs:ColorService,private _activatedRoute:ActivatedRoute) { }

  color: string='red'

  ngOnInit(): void {
    // this.color=this.cs.getColor()
    // this.refreshColor()
    // this.cs.colorStatus.subscribe((color)=>{
    //   this.color=color;
    // })
    this._activatedRoute.params.subscribe(parameter => {
      console.log(parameter.colorName)
      if (parameter.colorName){
        this.color=parameter.colorName
      }
    })
  }



  // refreshColor(){
  //   setInterval(() => {
  //     this.color=this.cs.getColor()
  //   },5000)
  // }

}
