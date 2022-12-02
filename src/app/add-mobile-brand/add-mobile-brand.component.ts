import { Component, OnInit } from '@angular/core';
import { MobileBrand } from '../mobile-brand';
import { MobileBrandService } from '../mobile-brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mobile-brand',
  templateUrl: './add-mobile-brand.component.html',
  styleUrls: ['./add-mobile-brand.component.css']
})
export class AddMobileBrandComponent implements OnInit {
mbrand:MobileBrand = new MobileBrand();

  constructor(private mbrandser:MobileBrandService,private route:Router) { }

  ngOnInit(): void {
  }

  saveLaptop(){
    this.mbrandser.addMobile(this.mbrand).subscribe(data=>{
      console.log(data);
      this.goToLaptopList();
    });
  }
  goToLaptopList(){
    this.route.navigate(['mobile-brand-list']);
  }
  onSubmit(){
    console.log(this.mbrand);
    this.saveLaptop();
  }

}
