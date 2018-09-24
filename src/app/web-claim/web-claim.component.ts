import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticateService } from '../authentication/authenticate.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalClaimComponent } from '../modal-claim/modal-claim.component';
import { ApiService } from '../_http/api.service';
import { CookieService } from 'ngx-cookie-service';

import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-web-claim',
  templateUrl: './web-claim.component.html',
  styleUrls: ['./web-claim.component.css']
})
export class WebClaimComponent implements OnInit {
  data_total: any;
  page_total: any;
  closeResult: string;
  searchForm = new FormGroup({
    searchType: new FormControl('date'),
    startDate: new FormControl(),
    endDate: new FormControl(),
    searchTxt: new FormControl()
  });

  dateChk: any = false;
  startDate: any;
  endDate: any;
  data: any;
  loading: any = true;
  txt_load: string = "Loading...";

  constructor(private service: AuthenticateService,
    private modalService: NgbModal,
    private _service: ApiService,
    private cookieService: CookieService) {

  }

  ngOnInit() {

    this.loading = true;
    this.service.Guard();

    this.cookieService.set('menu', '/web');
    this.setTypeSearch();
    let dateCC = new Date();
    let month = '';
    if (dateCC.getMonth() + 1 < 10) {
      month = '0' + (dateCC.getMonth() + 1);
    } else {
      month = '' + (dateCC.getMonth() + 1);
    }

    this.startDate = dateCC.getDate() - 1 + '/' + month + '/' + dateCC.getFullYear();
    this.endDate = dateCC.getDate() + '/' + month + '/' + dateCC.getFullYear();

    let dateDataS = dateCC.getFullYear() + '-' + month + '-' + (dateCC.getDate() - 1) + '/' + dateCC.getFullYear() + '-' + month + '-' + dateCC.getDate();


    $('#formSearch').slideDown(700);
    //set Date  Default  Current Date 
    this.getDataAssess('/' + dateDataS + '/')
  }

  getDataAssess(data) {
    let call = this._service.get('claim', '/smg', data, 'web').subscribe((res) => {

      this.loading = false;
      this.txt_load = "Loading...";
      this.data = res;
      this.data_total = this.data.length;
      this.page_total = (this.data.length / 10) - 1;
      // return true;

    }, (err) => {
      console.log(err);

    });
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

  }







  // Tempalte Form *******************************************************

  claim_detail(data) {
    const modalRef = this.modalService.open(ModalClaimComponent, { size: 'lg', });
    modalRef.componentInstance.data = data;
  }

  searchFN() {

    let chkData = this.searchForm.value;
    if (chkData.searchType != "date") {
      if (chkData.searchTxt == null) {

        if (chkData.searchType == "NatID") {
          this.notify_validate("กรุณากรอกเลขบัตรประชาชน", null);
        } else {
          this.notify_validate("กรุณากรอกเลขกรมธรรม์", null);
        }
      }
    } else {
      if (chkData.startDate == null || chkData.startDate == "" || chkData.endDate == null || chkData.endDate == "") {
        this.notify_validate("กรุณากรอกวันที่", null);
      } else {
        this.loading = true;
        let dateDataS = this.searchForm.value.startDate + '/' + this.searchForm.value.endDate;

        let s = new Date(this.searchForm.value.startDate);
        let e = new Date(this.searchForm.value.endDate);
        let sm = '';
        let em = '';
        if (s.getMonth() + 1 < 10) {
          sm = '0' + (s.getMonth() + 1);
        } else {
          sm = '' + (s.getMonth() + 1);
        }
        if (e.getMonth() + 1 < 10) {
          em = '0' + (e.getMonth() + 1);
        } else {
          em = '' + (e.getMonth() + 1);
        }



        this.startDate = s.getDate() + '/' + sm + '/' + s.getFullYear();
        this.endDate = e.getDate() + '/' + em + '/' + e.getFullYear();
        // this.endDate = dateCC.getDate() + '/' + month + '/' + dateCC.getFullYear();

        let cc = this.getDataAssess('/' + dateDataS + '/').then(res => {
          if (res) {
            this.notify_validate("ค้นหาเรียบร้อย...", 200);
          }
        });





      }
    }
  }

  setTypeSearch() {
    console.log(this.searchForm.value.searchType);
    let type = this.searchForm.value.searchType;

    if (type == 'date') {


      this.dateChk = true;
    } else {
      this.dateChk = false;

    }
  }

  notify_validate(msg, config) {
    if (config != null) {
      $('#snackbar').css('background-color', '#119611');
    } else {
      $('#snackbar').css('background-color', '#ff3547');
    }
    $('#snackbar').addClass('show');
    $('#snackbar>span').text(msg)
    $('#textSh').focus();
    $('#textSh').css('border-color', '#dc3545');
    $('#textSh').css('box-shadow', '0 0 0 0');
    setTimeout(function () {
      $('#snackbar').removeClass('show');
    }, 5000);
  }


  today() {
    location.href = "/assess";
  }
}
