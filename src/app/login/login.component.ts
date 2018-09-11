import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../authentication/authenticate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userchk: any = false;
  passchk: any = false;
  loginchk: any = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private route: Router, private service: AuthenticateService) { }

  ngOnInit() {
    let chk = this.service.Guard();
    if (chk == true) {
      // location.href = '/';
      this.route.navigate(['/claim']);
    } else {
      $(".slideMenu").css('width', '0');
      $(".navStyle").css("margin-left", "0");
      $(".container-fluid").css("margin-left", "0");
    }
  }


  signin() {
    let chkUser = this.loginForm.controls.username.invalid;
    let chkPass = this.loginForm.controls.password.invalid;
    if (chkUser && chkPass) {
      this.userchk = true;
      this.passchk = true;
    } else if (!chkUser && chkPass) {
      this.passchk = true;
      this.userchk = false;
    } else if (chkUser && !chkPass) {
      this.userchk = true;
      this.passchk = false;
    } else if (!chkUser && !chkPass) {
      this.userchk = false;
      this.passchk = false;


      let statuslog = this.service.signin(this.loginForm.value);


      if (statuslog) {
        location.href = '/';
        this.route.navigate(["/claim"]);
      } else {
        this.loginchk = true;
      }
    }

  }


  checkValidator() {
    let chkUser = this.loginForm.controls.username.invalid;
    let chkPass = this.loginForm.controls.password.invalid;
    this.loginchk = false;


    if (chkUser && chkPass) {
      this.userchk = true;
      this.passchk = true;
    } else if (!chkUser && chkPass) {
      this.passchk = true;
      this.userchk = false;
    } else if (chkUser && !chkPass) {
      this.userchk = true;
      this.passchk = false;
    } else if (!chkUser && !chkPass) {
      this.userchk = false;
      this.passchk = false;
    }


  }

}
