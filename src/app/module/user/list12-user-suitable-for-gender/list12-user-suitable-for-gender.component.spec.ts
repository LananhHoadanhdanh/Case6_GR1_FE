import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List12UserSuitableForGenderComponent } from './list12-user-suitable-for-gender.component';

describe('List12UserSuitableForGenderComponent', () => {
  let component: List12UserSuitableForGenderComponent;
  let fixture: ComponentFixture<List12UserSuitableForGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List12UserSuitableForGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List12UserSuitableForGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
