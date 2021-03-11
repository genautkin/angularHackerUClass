import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-album',
  templateUrl: './main-album.component.html',
  styleUrls: ['./main-album.component.css']
})
export class MainAlbumComponent implements OnInit {

  constructor(public http: HttpClient) { 
   
  }

  photos=[]

  // https://jsonplaceholder.typicode.com/photos/1

  ngOnInit(): void {
      this.getPhotos([1,5,10,20,30,44])
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


