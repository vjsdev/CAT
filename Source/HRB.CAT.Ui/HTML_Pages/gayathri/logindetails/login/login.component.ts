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
    mail_id: "vishnupotti@hrblock.com"
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
    this.val = sha512.sha512_256(this.trial);
    console.log(this.form.value.emailFormControl);
    this.otphash = sha512.sha512_256(this.form.value.emailFormControl);
    console.log(this.val);
    console.log(this.otphash);
    if (this.val !== this.otphash) {
      alert("not same");
    }
  }
  sendMailID() {
    this.otp = true;
    console.log(this.form.value.emailFormControl);
    this.apiService.sendUserMailID(this.form.value).subscribe(response => {
      console.log("Sent a mail id");
      //console.log(response.json());
    });
  }
  otp = false;
  expanded = false;
  matcher = new MyErrorStateMatcher();
}
