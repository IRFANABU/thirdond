import { Component, OnInit } from '@angular/core';
import { Mobile } from '../mobile';
import { MobileService } from '../mobile.service';
import { Router } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {
  term: any;
  mobile: Mobile[];
 
  


  constructor(private mobileServ: MobileService, private route: Router) { }

  ngOnInit(): void {
    this.getMobile();
  }

  getMobile() {
    this.mobileServ.getMobiles().subscribe(data => {
      this.mobile = data;
    });
  }
  update(id: number) {
    this.route.navigate(['update-mobile', id]);

  }
  view(id: number) {
    this.route.navigate(['mobile-detail', id]);

  }

  delete(id: number) {
    this.mobileServ.deleteById(id).subscribe(data => {
      console.log(data);
      alert("Record Deleted Successfully");
      this.getMobile();
    });

  }

  // serach filter // 




}
