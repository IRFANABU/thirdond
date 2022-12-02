import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { MobileBrandService } from '../mobile-brand.service';
import { ResolveEnd, Router } from '@angular/router';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {
  mobile: Mobile = new Mobile();
  brands: String[];
  constructor(private mobileServ: MobileService, private mobilebrandServ: MobileBrandService, private route: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.mobilebrandServ.getBrandNames().subscribe(data => {
      console.log(data);
      this.brands = data;
    })
  }
  saveLaptop() {
    this.mobileServ.addMobile(this.mobile).subscribe(data => {
      console.log(data);
      this.goToLaptopList();
    });
  }
  async goToLaptopList() {
    await wait(5000);
    this.route.navigate(['home/mobile-list']);
  }
  onSubmit() {
    console.log(this.mobile);
    this.saveLaptop();
  }
  getbrandcode() {
    this.mobilebrandServ.getbrandcodes(this.mobile.brand).subscribe(data => {
      console.log(data);
      this.mobile.brandCode = data;
    })
  }
}
function wait(timeToWait: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("success");
    }, timeToWait);
  })
}

