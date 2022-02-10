import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePriceUserComponent } from './update-price-user.component';

describe('UpdatePriceUserComponent', () => {
  let component: UpdatePriceUserComponent;
  let fixture: ComponentFixture<UpdatePriceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePriceUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePriceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
