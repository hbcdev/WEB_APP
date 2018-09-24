import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-precret',
  templateUrl: './precret.component.html',
  styleUrls: ['./precret.component.css']
})
export class PrecretComponent implements OnInit {
  data: any = [{
    name: "test",
    number: 12,
  },
  {
    name: "noom",
    number: 20
  }
  ];

  name = new FormControl('');
  constructor() { }

  ngOnInit() {

  }

  getText() {
    console.log("name : " + this.name.value);


    let item1 = this.data.find(i => i.name === this.name.value);


    if (item1 == undefined) {
      console.log("ไม่มี");

    } else {
      console.log("มี");

    }
  }

}
