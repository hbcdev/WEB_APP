import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecretComponent } from './precret.component';

describe('PrecretComponent', () => {
  let component: PrecretComponent;
  let fixture: ComponentFixture<PrecretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
