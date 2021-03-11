import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(public http: HttpClient) {
    
   }

  appName="HackerU"
  photo=null

  getAppName(){
    return this.appName
  }

  setAppName(val:string){
    this.appName=val
  }

  
//items in array will be string string[]
//items in array will be string number[]


  //  getPhoto(result){


  //   if (this.photo!=null){
  //     result(this.photo)
  //     return
  //   }
  //    this.http
  //   .get('https://jsonplaceholder.typicode.com/photos/50')
  //   .subscribe(data => {
  //     this.photo=data
  //     result(this.photo)
  //   });
    
  //   }
    

    getPhoto(){

      let promise = new Promise((resolve) => {
          if (this.photo!=null){
            resolve(this.photo)
          return
        }
        this.http
        .get('https://jsonplaceholder.typicode.com/photos/50')
        .subscribe(data => {
          this.photo=data
          resolve(this.photo)
        });

      });
      return promise;



      
      }
    
   
  }





