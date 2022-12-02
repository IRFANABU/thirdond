import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pipe  } from '@angular/core';
import { PipeTransform } from '@angular/core';
import { filter, pipe } from 'rxjs';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
})

export class SignupComponent implements OnInit {
  submitted = false;

  signinForm: FormGroup;
  name: any;
 
  currentdate : any = new Date();
  constructor(private httpClient: HttpClient, private builder: FormBuilder,
    private route: Router) { }


  get f() {
    return this.signinForm.controls;

  }

  ngOnInit(): void {
    this.signinForm = this.builder.group({
      name: ['', Validators.required],
      MobileNo: ['', [Validators.required, Validators.pattern("^[6-9]{1}[0-9]{9}$"), Validators.minLength(10), Validators.maxLength(10)]],
      // MobileNo: ['',[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
      Email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Password: ['', Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')],
      ConformPassword: ['', Validators.required],
      uploadfile: ['', Validators.required]
    });
  }
  KeyPress(touch: any): boolean {
    const charCode = (touch.which) ? touch.which : touch.keyCode;
    if (charCode >= 48 && charCode <= 57) {
      return true;
    }
    console.log('charCode is' + charCode);
    // alert("Please Enter the number only");
    return false;

  }

  password() {

    return this.signinForm.value.Password === this.signinForm.value.ConformPassword;

  }






  signin() {
    if(this.signinForm.valid) {
      console.log(this.signinForm)
    }


    this.httpClient.get<any>("http://localhost:3000/comments").subscribe(emails => {
      const mailcheck = emails.find((a: any) => {
        return a.Email === this.signinForm.value.Email;
      });



      if (!mailcheck) {
        if (this.password()) {

          this.httpClient.post<any>('http://localhost:3000/comments', this.signinForm.value).subscribe(res => {

            alert("signin successfully");
            this.signinForm.reset();
            this.route.navigate(['login']);

          });

        }

        else {
          // alert("password is mismatced");
          this.signinForm.controls['ConformPassword'];

        }
      }
      else {
        alert("Email id already Exist");
        this.signinForm.controls['Email'].reset();
      }

    });


  }

  // file upload /////

  selectedfile: File = null as any;
  fileSize = 0;
  fileupload(event: any) {
    this.selectedfile = event.target.files[0];
    this.fileSize = this.selectedfile.size / (1024 * 1024);
    var selectedFileType = this.selectedfile.type;
    console.log(this.fileSize);
    console.log(selectedFileType);
    if (selectedFileType === "image/png" || selectedFileType === "application/pdf" || selectedFileType === "image/jpeg") {
      if (this.fileSize > 2) {
        alert("Selected file size is more than 2mb");
        this.f['uploadfile'].reset();

      } else {
        alert("success");
      }
    }
    else {
      console.log(selectedFileType);
      alert("File format should be- png or jpg or pdf");
      this.f['uploadfile'].reset();
    }

  }

}

