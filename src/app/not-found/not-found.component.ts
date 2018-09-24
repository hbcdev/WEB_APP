import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    $('nav').hide();
    $('.slideMenu').hide();
    $(".container-fluid").css("margin-left", "0");
  }

  backTohome() {
    $(".container-fluid").css("margin-left", "15%");
    $('nav').show();
    $('.slideMenu').show();
    this.route.navigate(['/assess']);
  }
}
