import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Subscribe} from '../classes/subscribe'

@Component({
  selector: 'app-form-subscribe',
  templateUrl: './form-subscribe.component.html',
  styleUrls: ['./form-subscribe.component.css']
})
export class FormSubscribeComponent implements OnInit,AfterViewInit,OnDestroy,AfterContentInit,AfterContentChecked {

  constructor() {
    console.log(this.test)
   }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
    console.log(this.email)
  }
  ngOnDestroy(): void {
   console.log("ngOnDestroy")
  }
  // ngDoCheck(): void {
  //  console.log("ngDoCheck")
  // }

  //  ngOnChanges(){
  //   console.log(`ngOnChanges - data is ${this.test}`);
  //  }

  ngAfterViewInit(): void {
    console.log(this.email)
    this.email.nativeElement.value=this.test
  }



  user:Subscribe

  @Input() test='Start'

  @ViewChild('email') email: ElementRef;

  ngOnInit(): void {
    console.log(this.test)
    console.log(this.email)
    
  //  this.email.nativeElement.value='test'

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
