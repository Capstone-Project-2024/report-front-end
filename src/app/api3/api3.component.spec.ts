import { ComponentFixture, TestBed } from '@angular/core/testing';

import { API3Component } from './api3.component';

describe('API3Component', () => {
  let component: API3Component;
  let fixture: ComponentFixture<API3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [API3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(API3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
