import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {
mob:Mobile=new Mobile();
private id:number;
  constructor(private mobser:MobileService,private active:ActivatedRoute,private route:Router) { }

  ngOnInit(): void {
    this.id=this.active.snapshot.params['id'];
     this.mobser.getMobile(this.id).subscribe(data=>{
      this.mob=data;
      console.log(this.mob);
     });
  }

  // get(id:number){
  //   this.mobser.(this.id).subscribe(data=>{
  //     console.log(data);
  //     this.mob=data;
  //   });
  //   }

}
