import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-mobile',
  templateUrl: './update-mobile.component.html',
  styleUrls: ['./update-mobile.component.css']
})
export class UpdateMobileComponent implements OnInit {
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

  // show(){
  //   this.mobser.getMobile(this.id).subscribe(data=>{
  //     console.log(data);
  //     this.mob=data;
  //   })
  // }
  
    onSubmit(){
      console.log(this.mob);
      this.saveLaptop();
    }
  
    saveLaptop(){
      this.mobser.getMobile(this.id).subscribe(data=>{
        console.log(data);
        this.mob=data;
      });
      this.mobser.changeById(this.id,this.mob).subscribe(data=>{
        console.log(data);
        this.goToLaptopList();
      });
    }
    goToLaptopList(){
      this.route.navigate(['mobile-List']);
    }
  

}
