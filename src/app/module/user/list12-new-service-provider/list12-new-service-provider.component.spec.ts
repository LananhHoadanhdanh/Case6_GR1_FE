import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List12NewServiceProviderComponent } from './list12-new-service-provider.component';

describe('List12NewServiceProviderComponent', () => {
  let component: List12NewServiceProviderComponent;
  let fixture: ComponentFixture<List12NewServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ List12NewServiceProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(List12NewServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
