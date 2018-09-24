import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaxClaimComponent } from './fax-claim.component';

describe('FaxClaimComponent', () => {
  let component: FaxClaimComponent;
  let fixture: ComponentFixture<FaxClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaxClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaxClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
