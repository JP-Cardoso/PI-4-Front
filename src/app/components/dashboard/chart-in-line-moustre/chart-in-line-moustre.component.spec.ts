import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInLineMoustreComponent } from './chart-in-line-moustre.component';

describe('ChartInLineMoustreComponent', () => {
  let component: ChartInLineMoustreComponent;
  let fixture: ComponentFixture<ChartInLineMoustreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartInLineMoustreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartInLineMoustreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
