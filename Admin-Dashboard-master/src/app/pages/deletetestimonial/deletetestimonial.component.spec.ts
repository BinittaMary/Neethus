import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetestimonialComponent } from './deletetestimonial.component';

describe('DeletetestimonialComponent', () => {
  let component: DeletetestimonialComponent;
  let fixture: ComponentFixture<DeletetestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetestimonialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetestimonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
