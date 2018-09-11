import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticateService } from '../authentication/authenticate.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalClaimComponent } from '../modal-claim/modal-claim.component';

import 'datatables.net';
import 'datatables.net-bs4';
// declare var $: any;
@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  closeResult: string;
  searchForm = new FormGroup({
    searchType: new FormControl('policy_no'),
    startDate: new FormControl(),
    endDate: new FormControl(),
    searchTxt: new FormControl()
  });

  dateChk: any = false;

  data: any = [
    {
      'Notify_No': '123456987',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
    {
      'Notify_No': 'Notify_No',
      'Notify_Date': 'Notify_Date',
      'Policy_No': 'Policy_No',
      'Plan': 'Plan',
      'Hospital': 'Hospital',
      'Admit_Date': 'Admit_Date',
      'ICD_10': 'ICD',
      'Admit_Type': 'Admit_Type',
      'Treatment_type': 'Treatment_type',
      'Recieve': 'Recieve',
      'Ref_No': 'Ref_No'
    },
  ];

  table_header: any = [
    { title: 'Notify No', data: 'Notify_No' },
    { title: 'Notify Date', data: 'Notify_Date' },
    { title: 'Policy No', data: 'Policy_No' },
    { title: 'Plan', data: 'Plan' },
    { title: 'Hospital', data: 'Hospital' },
    { title: 'Admit Date', data: 'Admit_Date' },
    { title: 'ICD 10', data: 'ICD 10' },
    { title: 'Admit Type', data: 'Admit_Type' },
    { title: 'Treatment type', data: 'Treatment_type' },
    { title: 'Recieve', data: 'Recieve' },
    { title: 'Ref No', data: 'Ref_No' },
  ];
  constructor(private service: AuthenticateService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.service.Guard();
    $('#formSearch').slideDown(700);
  }

  claim_detail(data) {
    const modalRef = this.modalService.open(ModalClaimComponent, { size: 'lg' });
    modalRef.componentInstance.name = data;
  }

  searchFN() {
    console.log(this.searchForm.value);
    let chkData = this.searchForm.value;
    if (chkData.searchType != "date") {
      if (chkData.searchTxt == null) {
        this.notify_validate(chkData.searchType);
      }
    } else {
      if (chkData.startDate == null || chkData.startDate == "" || chkData.endDate == null || chkData.endDate == "") {
        this.notify_validate(chkData.searchType);
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

  notify_validate(msg) {
    $('#snackbar').addClass('show');
    $('#snackbar>span').text('Please Input ' + msg)
    $('#textSh').focus();
    $('#textSh').css('border-color', '#dc3545');
    $('#textSh').css('box-shadow', '0 0 0 0');
    setTimeout(function () {
      $('#snackbar').removeClass('show');
    }, 3000);
  }

}
