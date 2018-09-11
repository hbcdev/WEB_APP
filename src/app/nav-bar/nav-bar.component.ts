import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AuthenticateService } from '../authentication/authenticate.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  authChk: any;
  title: string;
  constructor(private service: AuthenticateService) {
    this.authChk = this.service.Guard();
    if (this.authChk) {
      this.title = "Chubb Sammagi Insurance Public Company Ltd.";
    } else {
      this.title = " Health Benefit Consultance";
    }
  }

  ngOnInit() {

  }
  toggleSlide(event) {
    let slideWidth = $(".slideMenu").width();

    if (slideWidth > 0) {
      $(".slideMenu").css("width", "0");
      $(".navStyle").css("margin-left", "0");
      $(".container-fluid").css("margin-left", "0");
      $('#hbc_logo').fadeOut(250);
    } else {
      $(".slideMenu").css("width", "15%");
      $(".navStyle").css("margin-left", "15%");
      $(".container-fluid").css("margin-left", "15%");
      $('#hbc_logo').fadeIn(250);
    }



  }

  signout() {
    location.href = '/';
    this.service.signout();
  }
}
