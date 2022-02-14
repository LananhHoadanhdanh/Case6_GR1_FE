import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListOrdersComponent } from './my-list-orders.component';

describe('MyListOrdersComponent', () => {
  let component: MyListOrdersComponent;
  let fixture: ComponentFixture<MyListOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyListOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
