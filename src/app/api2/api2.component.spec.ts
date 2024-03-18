import { ComponentFixture, TestBed } from '@angular/core/testing';

import { API2Component } from './api2.component';

describe('API2Component', () => {
  let component: API2Component;
  let fixture: ComponentFixture<API2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [API2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(API2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
