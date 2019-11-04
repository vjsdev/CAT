import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CatAuthenticationService } from '../cat-core/cat-services/cat-authentication/cat-authentication.service';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Component({
  selector: 'app-cat-login',
  templateUrl: './cat-login.component.html',
  styleUrls: ['./cat-login.component.css']
})
export class CatLoginComponent implements OnInit, OnDestroy {
  userName: string;
  otp: string;
  returnUrl: string;
  loginForm1: FormGroup;
  submitted1 = false;
  loginForm2: FormGroup;
  submitted2 = false;
  loading1 = false;
  loading2 = false;
  error = '';
  emailPattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  private onDestroy$ = new Subject<void>();

  constructor(
    private authenticationService: CatAuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private adal: MsAdalAngular6Service) {
      this.userName=this.adal.LoggedInUserName;
   

  }

   ngOnInit() {
    this.loginUser();
  //   this.loginForm1 = this.formBuilder.group({
  //     username: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
  //   });
  //   this.loginForm2 = this.formBuilder.group({
  //     otp: ['', [Validators.required, Validators.minLength(4)]]
  //   });
  //   this.loginForm1.get('username').valueChanges
  //   .pipe(takeUntil(this.onDestroy$))
  //   .subscribe(data => this.onValueChange(data));

  //   this.loginForm2.get('otp').valueChanges
  //   .pipe(takeUntil(this.onDestroy$))
  //   .subscribe(data => this.onValueChange(data));

     this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  // get f1() { return this.loginForm1.controls; }
  // get f2() { return this.loginForm2.controls; }

  // onValueChange(value: string) {
  //   if (!value) {
  //     this.error = '';
  //   }
  // }
  // onSubmit1() {
  //   this.submitted1 = true;
  //   if (this.loginForm1.valid) {
  //    this.userName = this.loginForm1.get('username').value;
  //    this.loading1 = true;
  //    this.authenticateUser(this.userName);
  //   } else {
  //     return;
  //   }
  // }
  // onSubmit2() {
  //   this.submitted2 = true;
  //   if (this.loginForm2.valid && this.otp) {
  //     this.loading2 = true;
  //     this.login(this.userName);
  //   } else {
  //     return;
  //   }
  // }
  // authenticateUser(userName: string) {
  //   this.otp = '';
  //   this.error = '';
  //   this.authenticationService
  //     .authenticateUser(userName)
  //     .pipe(takeUntil(this.onDestroy$))
  //     .subscribe(
  //       response => {
  //         this.otp = response.otp;
  //       },
  //       error => {
  //         this.loading1 = false;
  //         this.error = error.message;
  //       }
  //     );
  //   return;
  // }
  
  login(userName: string) {
    this.error = '';
    this.authenticationService
      .login(userName)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(
        response => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.loading2 = false;
          this.error = error.message;
        }
      );
    return;
  }

  loginUser(){
    if (!this.adal.isAuthenticated) {
      this.adal.login();
    }else{
      this.login(this.userName);
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }


}
