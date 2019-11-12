import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouturecapComponent } from './couturecap.component';

describe('CouturecapComponent', () => {
  let component: CouturecapComponent;
  let fixture: ComponentFixture<CouturecapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouturecapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouturecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
