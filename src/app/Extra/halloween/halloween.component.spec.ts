import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloweenComponent } from './halloween.component';

describe('HalloweenComponent', () => {
  let component: HalloweenComponent;
  let fixture: ComponentFixture<HalloweenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HalloweenComponent]
    });
    fixture = TestBed.createComponent(HalloweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
