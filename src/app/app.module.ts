import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { MobileListComponent } from './mobile-list/mobile-list.component';
import { UpdateMobileComponent } from './update-mobile/update-mobile.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { AddMobileBrandComponent } from './add-mobile-brand/add-mobile-brand.component';
import { MobileBrandListComponent } from './mobile-brand-list/mobile-brand-list.component';
import { UpdateMobileBrandComponent } from './update-mobile-brand/update-mobile-brand.component';
import { MobileBrandDetailComponent } from './mobile-brand-detail/mobile-brand-detail.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { FormStyle } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';

export function httpload(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AddMobileComponent,
    MobileListComponent,
    UpdateMobileComponent,
    MobileDetailComponent,
    AddMobileBrandComponent,
    MobileBrandListComponent,
    UpdateMobileBrandComponent,
    MobileBrandDetailComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpload,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
