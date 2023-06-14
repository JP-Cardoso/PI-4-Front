import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';

import { FooterComponent } from './footer/footer.component';
import { MessageHourComponent } from './message-hour/message-hour.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import localePt from '@angular/common/locales/pt'
import { ShortenerPipe } from 'src/app/shared/pipes/shortener.pipe';
import { InputWidthDirective } from 'src/app/shared/input-width.directive';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { TestComponent } from './test/test.component';
import { AverageCardComponent } from './average-card/average-card.component';
import { ChartInLineComponen } from './chart-in-line/chart-in-line.component';
import { ChartInLineMoustreComponent } from './chart-in-line-moustre/chart-in-line-moustre.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { TwoCartsInLineComponent } from './two-carts-in-line/two-carts-in-line.component';

registerLocaleData(localePt, 'pt')

export const CustomCurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
}

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    MessageHourComponent,
    ShortenerPipe,
    InputWidthDirective,
    TestComponent,
    AverageCardComponent,
    ChartInLineComponen,
    ChartInLineMoustreComponent,
    ScatterPlotComponent,
    TwoCartsInLineComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    CanvasJSAngularChartsModule
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ]
})
export class DashboardModule { }
