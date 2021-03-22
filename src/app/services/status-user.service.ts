import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusUserService {

  constructor() { }

  status:boolean=null;

  isUserLogin(): Promise<boolean>{
    return new Promise((resolve)=>{
      if (this.status==null){
        setTimeout(() => {
          this.status=false
          resolve(this.status)
        }, 3000);
      }
      else{
        resolve(this.status)
      }
      
   });

    
  }
}
