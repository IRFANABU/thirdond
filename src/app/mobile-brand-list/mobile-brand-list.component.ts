import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MobileBrand } from '../mobile-brand';
import { MobileBrandService } from '../mobile-brand.service';

@Component({
  selector: 'app-mobile-brand-list',
  templateUrl: './mobile-brand-list.component.html',
  styleUrls: ['./mobile-brand-list.component.css']
})
export class MobileBrandListComponent implements OnInit {
    brands: MobileBrand[];
  constructor(private mobilebrandser :MobileBrandService, private router: Router) { }

  ngOnInit(): void {

    this.getBrand();
    }

   getBrand(){

    this.mobilebrandser.getMobiles().subscribe(data=>{
      this.brands=data;
    })
   }

   deletebyid(id:number){
      this.mobilebrandser.deleteById(id).subscribe(data=>{
        console.log(data);
        alert("data deleted successfully")
     
      })

   }
   

}
