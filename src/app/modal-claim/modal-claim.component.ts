import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-claim',
  templateUrl: './modal-claim.component.html',
  styleUrls: ['./modal-claim.component.css']
})
export class ModalClaimComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }


}
