import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { User } from "../user";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import * as sha512 from "js-sha512";
import { callNgModuleLifecycle } from "@angular/core/src/view/ng_module";
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: "cat-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit() {}
  user = {
    mail_id: ""
  };
  form = new FormGroup({
    emailFormControl: new FormControl("", [
      Validators.required,
      Validators.email
    ]),
    otpFormControl: new FormControl()
  });
  val;
  otphash;
  trial;
  verifyHash() {
    //TODO update the code to compare with the hash obtained by sending email id
    this.trial = "123456";
    //this.val = sha512.sha512_256(this.trial);
    this.otphash = sha512.sha512_256(this.form.value.emailFormControl);
    console.log(this.form.value.emailFormControl);
    this.apiService.getOtphash().subscribe(data => {
      console.log(data);
      this.val = data.otphash;
      console.log(this.val);
      console.log(this.otphash);
      if (this.val != this.otphash) {
        alert("not same");
      } else {
        alert("Thank god");
      }
    });
  }
  res: any;
  sendMailID() {
    this.otp = true;
    //console.log(this.form.value.emailFormControl);

    this.user.mail_id = this.form.value.emailFormControl;
    this.apiService.sendUserMailID(this.user).subscribe(response => {
      console.log("Sent a mail id");
      console.log(response);
      this.res = response;
      console.log(this.res);
    });
  }

  otp = false;
  expanded = false;
  matcher = new MyErrorStateMatcher();
}
