import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-setcolor',
  templateUrl: './setcolor.component.html',
  styleUrls: ['./setcolor.component.css']
})
export class SetcolorComponent implements OnInit {

  constructor(private cs:ColorService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  save(color:string){
    // console.log(color)
    this.cs.setColor(color)
    // this.router.navigate(['/showColor', color])
    this.router.navigate(['../showColor/'+color], { relativeTo: this.route });
  }
}
