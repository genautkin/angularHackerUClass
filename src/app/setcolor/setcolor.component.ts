import { Component, OnInit } from '@angular/core';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-setcolor',
  templateUrl: './setcolor.component.html',
  styleUrls: ['./setcolor.component.css']
})
export class SetcolorComponent implements OnInit {

  constructor(private cs:ColorService) { }

  ngOnInit(): void {
  }

  save(color:string){
    // console.log(color)
    this.cs.setColor(color)
  }
}
