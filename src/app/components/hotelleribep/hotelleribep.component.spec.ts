import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelleribepComponent } from './hotelleribep.component';

describe('HotelleribepComponent', () => {
  let component: HotelleribepComponent;
  let fixture: ComponentFixture<HotelleribepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelleribepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelleribepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
