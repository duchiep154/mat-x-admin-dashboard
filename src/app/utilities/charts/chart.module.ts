import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';

const modules = [
  AreaChartComponent,
  DoughnutChartComponent,
  BarChartComponent,
  LineChartComponent,
  PieChartComponent
]

@NgModule({
  declarations: [modules, PieChartComponent],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports :[
    ChartsModule,
    modules
  ]
})
export class ChartModule { }
