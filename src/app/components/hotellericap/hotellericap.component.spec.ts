import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotellericapComponent } from './hotellericap.component';

describe('HotellericapComponent', () => {
  let component: HotellericapComponent;
  let fixture: ComponentFixture<HotellericapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotellericapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotellericapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
