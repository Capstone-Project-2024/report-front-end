import { ComponentFixture, TestBed } from '@angular/core/testing';

import { coinloreComponent } from './coinlore.component';

describe('coinloreComponent', () => {
  let component: coinloreComponent;
  let fixture: ComponentFixture<coinloreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [coinloreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(coinloreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
