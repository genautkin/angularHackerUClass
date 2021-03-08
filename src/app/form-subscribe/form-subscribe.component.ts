import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Subscribe} from '../classes/subscribe'

@Component({
  selector: 'app-form-subscribe',
  templateUrl: './form-subscribe.component.html',
  styleUrls: ['./form-subscribe.component.css']
})
export class FormSubscribeComponent implements OnInit,AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    // this.email.nativeElement.value='test'
  }
  user:Subscribe

  @ViewChild('email') email: ElementRef;

  ngOnInit(): void {
    console.log(this.user)

  }

  a={a:'sdsdd'};

  form={
    email:'gena@gena.com',
    firstName:'',
    lastName:'',
    _address:'',
    get address(){
      return this._address
    },
    set address(val:string){
     
      if (!isNaN(Number(val))){
        console.log(val)
        this._address=val
      }
      else {
        this._address=''
      }
    }
  }
 

  // onSave(email:string,firstName:string,lastName:string,address:string){
  //     console.log(new Subscribe(email,firstName,lastName,address))
  //     this.user=new Subscribe(email,firstName,lastName,address);
  //     console.log(this.user.firstName)
  // }

  onSave(){
    console.log(this.form)
  }

}
