import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestViews6Component } from './highest-views6.component';

describe('HighestViews6Component', () => {
  let component: HighestViews6Component;
  let fixture: ComponentFixture<HighestViews6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestViews6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestViews6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
