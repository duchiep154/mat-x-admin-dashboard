import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { Color } from 'ng2-charts';
import { ChartData } from '../chart-options.interface';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit, OnChanges {

  constructor() { }

  // Doughnut Chart Starts
  @Input() chartInputData: ChartData[] = [
    { data: 120, label: 'Sales Q1', color: '#2962ff' }, // blue
    { data: 150, label: 'Sales Q2', color: '#ffd400' }, // yellow
    { data: 180, label: 'Sales Q3', color: 'red' }, // red
    { data: 90, label: 'Sales Q4', color: '#03bc6d' }, // green
  ];
  public doughnutChartLabels;
  public doughnutChartData;
  public doughnutChartType = 'doughnut';
  public doughnutChartOptions: (ChartOptions) = {
    responsive: true,
    legend: {
      display: false
    }
  };
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: [],
      borderColor: 'transparent',
    }
  ];
  // Doughnut Chart Ends

  ngOnInit(): void {
    this.chartInitialization();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.chartInitialization();
  }

  /**
* chart initialization
*/
  chartInitialization() {
    this.doughnutChartData = this.chartInputData.map(e => e.data);
    this.doughnutChartColors[0].backgroundColor = this.chartInputData.map(e => e.color);
    this.doughnutChartLabels = this.chartInputData.map(e => e.label);

  }
}
