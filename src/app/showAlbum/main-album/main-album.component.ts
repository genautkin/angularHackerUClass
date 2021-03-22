import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos-service.service';

@Component({
  selector: 'app-main-album',
  templateUrl: './main-album.component.html',
  styleUrls: ['./main-album.component.css']
})
export class MainAlbumComponent implements OnInit,OnDestroy {

  constructor(public http: HttpClient,private myService:PhotosService) { 
   
  }
  ngOnDestroy(): void {
    
  }

  photos=[]

  // https://jsonplaceholder.typicode.com/photos/1

  async ngOnInit(): Promise<void> {
        
    
      // this.myService.getPhoto(this.gotResultFromServer)
      this.myService.getPhoto().then((val)=>{
        console.log(val)
      })

       this.getPhotos([1,5,10,20,30,44])

  }

  gotResultFromServer(val){
    console.log(val)
  }
//items in array will be string string[]
//items in array will be string number[]

  getPhotos(ids:number[]){
    ids.forEach(id => {
      this.getPhoto(id)
    });
    
   
  }

  getPhoto(id:number){

       this.http
       .get('https://jsonplaceholder.typicode.com/photos/'+id)
       .subscribe(data => {
          this.photos.push(data)
       });
       }
  }


