import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  // toggleSlide(event) {
  //   let slideWidth = $(".slideMenu").width();

  //   if (slideWidth > 0) {
  //     $(".slideMenu").css("width", "0");
  //     $(".navStyle").css("margin-left", "0");
  //     $(".container-fluid").css("margin-left", "0");
  //   } else {
  //     $(".slideMenu").css("width", "13%");
  //     $(".navStyle").css("margin-left", "13%");
  //     $(".container-fluid").css("margin-left", "13%");
  //   }



  // }

}
