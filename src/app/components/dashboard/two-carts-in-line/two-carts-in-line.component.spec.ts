import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCartsInLineComponent } from './two-carts-in-line.component';

describe('TwoCartsInLineComponent', () => {
  let component: TwoCartsInLineComponent;
  let fixture: ComponentFixture<TwoCartsInLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoCartsInLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoCartsInLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
