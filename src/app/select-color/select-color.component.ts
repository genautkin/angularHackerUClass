import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-color',
  templateUrl: './select-color.component.html',
  styleUrls: ['./select-color.component.css']
})
export class SelectColorComponent implements OnInit {

  constructor() { }

  
  color:string=''
  fontSize:number
  isBordered=false

  ngOnInit(): void {
  }

  apply(color: string, fontSize: number): void {
    this.color = color;
    this.fontSize = fontSize;
    }

}
