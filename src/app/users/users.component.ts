import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../authentication/authenticate.service';
import * as $ from 'jquery';
import { log } from 'util';
import 'datatables.net';
import 'datatables.net-bs4';
import swal from 'sweetalert';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  edit: any = false;
  usersFrm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    // fund: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  userDATA: any = [];

  constructor(private service: AuthenticateService) {
  }

  ngOnInit() {
    // this.service.Guard();
  }
  submit() {
    if (this.edit) {
      $("#addnew").css("background-color", "#fff");
    } else {
      this.userDATA.push(this.usersFrm.value);
      swal("Success", "Add new user Complete", "success");
    }

    this.usersFrm.setValue({
      username: "",
      password: "",
      name: "",
      surname: "",
      email: "",
    });

  }

  resetFrm() {
    this.edit = false;
    $("#addnew").css("background-color", "#fff");
    this.usersFrm.setValue({
      username: "",
      password: "",
      name: "",
      surname: "",
      email: "",
    });
  }
  chaneEdit(data) {
    this.edit = true;
    $("#addnew").css("background-color", " #f5deb357");
    this.usersFrm.setValue(data);
  }
  delUser(index, data) {
    "ต้องการลบข้อมูลของ " + data.username + " หรือไม่ ?", {
      'dangerMode': true,
      'buttons': true
    }



    swal({
      title: "",
      text: "ต้องการลบข้อมูลของ " + data.username + " หรือไม่ ?",
      icon: "warning",
      buttons: ['Cancel', 'Ok'],
      dangerMode: true
    }).then((value) => {
      console.log(value);
      if (value) {
        this.userDATA.splice(index, 1);
      }


    });

  }
}
