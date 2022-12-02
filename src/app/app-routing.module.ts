import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { AddMobileBrandComponent } from './add-mobile-brand/add-mobile-brand.component';
import { MobileBrandListComponent } from './mobile-brand-list/mobile-brand-list.component';
import { UpdateMobileBrandComponent } from './update-mobile-brand/update-mobile-brand.component';
import { MobileBrandDetailComponent } from './mobile-brand-detail/mobile-brand-detail.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // { path: "add-mobile", component: AddMobileComponent },
  // { path: "mobile-list", component: MobileListComponent },
  { path: "update-mobile/:id", component: UpdateMobileComponent },
  { path: "mobile-detail/:id", component: MobileDetailComponent },
  { path: "add-mobile-brand", component: AddMobileBrandComponent },
  
  { path: "update-mobile-brand/:id", component: UpdateMobileBrandComponent },
  { path: "mobile-brand-detail/:id", component: MobileBrandDetailComponent },
  // {path:'home',component:HomeComponent},
  { path: "login", component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {path:"mobile-brand-list",component:MobileBrandListComponent},
  {path:'home',component:HomeComponent,
    children: [
      { path: "add-mobile", component: AddMobileComponent },
      { path: "mobile-list", component: MobileListComponent },
      { path: "mobile-brand-list", component: MobileBrandListComponent },
      {path: "add-mobile-brand", component:AddMobileBrandComponent}

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
