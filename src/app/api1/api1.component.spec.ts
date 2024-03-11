import { ComponentFixture, TestBed } from '@angular/core/testing';

import { API1Component } from './api1.component';

describe('API1Component', () => {
  let component: API1Component;
  let fixture: ComponentFixture<API1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [API1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(API1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
