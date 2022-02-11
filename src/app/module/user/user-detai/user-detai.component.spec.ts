import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetaiComponent } from './user-detai.component';

describe('UserDetaiComponent', () => {
  let component: UserDetaiComponent;
  let fixture: ComponentFixture<UserDetaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
