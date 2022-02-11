import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List6UserVipComponent } from './list6-user-vip.component';

describe('List6UserVipComponent', () => {
  let component: List6UserVipComponent;
  let fixture: ComponentFixture<List6UserVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List6UserVipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List6UserVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
