import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockDataComponent } from './StockData.component';

describe('StockDataComponent', () => {
  let component: StockDataComponent;
  let fixture: ComponentFixture<StockDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
