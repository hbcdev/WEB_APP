import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFaxComponent } from './modal-fax.component';

describe('ModalFaxComponent', () => {
  let component: ModalFaxComponent;
  let fixture: ComponentFixture<ModalFaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
