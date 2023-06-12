import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartInLineComponent } from './chart-in-line.component';

describe('ChartInLineComponent', () => {
  let component: ChartInLineComponent;
  let fixture: ComponentFixture<ChartInLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartInLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartInLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
