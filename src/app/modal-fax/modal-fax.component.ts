import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal-fax',
  templateUrl: './modal-fax.component.html',
  styleUrls: ['./modal-fax.component.css']
})
export class ModalFaxComponent {
  @Input() data;
  constructor(public activeModal: NgbActiveModal) { }

}
