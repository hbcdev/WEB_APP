import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebClaimComponent } from './web-claim.component';

describe('WebClaimComponent', () => {
  let component: WebClaimComponent;
  let fixture: ComponentFixture<WebClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
