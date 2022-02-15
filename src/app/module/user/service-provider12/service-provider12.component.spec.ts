import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProvider12Component } from './service-provider12.component';

describe('ServiceProvider12Component', () => {
  let component: ServiceProvider12Component;
  let fixture: ComponentFixture<ServiceProvider12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceProvider12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProvider12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
