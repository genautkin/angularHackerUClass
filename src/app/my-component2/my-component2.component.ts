import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component2',
  templateUrl: './my-component2.component.html',
  styleUrls: ['./my-component2.component.css']
})
export class MyComponent2 implements OnInit {

  constructor() { }
  myClass:string='rounded mx-auto d-block'
  url:string=''
  name2: string="Gena"
  name: string="My String"
  names = ['Ari', 'Carlos', 'Felipe', 'Nate'];
  localLastName:string="My last name"

  ngOnInit(): void {
    this.showImage()
  }

  showImage(){
    setTimeout(() => {
      this.url='https://picsum.photos/200/300'
    }, 3000);
  }

  deleteItem(index:number){
    console.log(index+"!!!")
    this.names.splice(index,1);
  }
}
