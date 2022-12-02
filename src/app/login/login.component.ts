import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
 
  constructor(private httpclient: HttpClient,private build : FormBuilder, private router: Router,public translate:TranslateService ) { 
    translate.addLangs(['en','ta']);
    translate.setDefaultLang('en');
  }
  
  ngOnInit(): void {
    this.loginForm = this.build.group({
      Email: ['',Validators.required],
      Password: ['',Validators.required]

    });
  }
get f(){
  return this.loginForm.controls;
}
  login(){
    
    this.httpclient.get<any>('http://localhost:3000/comments').subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.Email === this.loginForm.value.Email && a.Password === this.loginForm.value.Password;
      });
      if(user){
        
        alert("loigin successfully");
        this.loginForm.reset();
       
      }
      else{
        alert("user not found");
        this.loginForm.reset();
      }

    });
   

  }
  switchLang(lang:string){
    this.translate.use(lang);

  }

}
