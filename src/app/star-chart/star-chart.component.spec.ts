import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarChartComponent } from './star-chart.component';

describe('StarChartComponent', () => {
  let component: StarChartComponent;
  let fixture: ComponentFixture<StarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarChartComponent]
    });
    fixture = TestBed.createComponent(StarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
