import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-slide-bar',
  templateUrl: './slide-bar.component.html',
  styleUrls: ['./slide-bar.component.css']
})
export class SlideBarComponent implements OnInit {



  constructor() { }

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
}
