import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color } from 'ng2-charts';
import { BarChartOptions } from '../chart-options.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnChanges {

  // Bar Chart Starts
  @Input() chartInputData: BarChartOptions = {
    lables: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    chartData: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales Q1', color: '#ffd400' },
      { data: [28, 48, 40, 19, 86, 27, 190], label: 'Sales Q2', color: '#2962ff' }
    ]
  };

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
    }
  };
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartLabels;

  public barChartData;
  public barChartColors: Color[];

  // Bar Chart Ends

  constructor() { }

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
    this.barChartLabels = this.chartInputData.lables;
    this.barChartData = this.chartInputData.chartData;
    this.barChartColors = [];
    this.chartInputData.chartData.forEach(element => {

      const temp = {
        backgroundColor: element.color || null
      };
      if (element.color) {
        this.barChartColors.push(temp);
      }
    });
    console.log(this.barChartColors);
  }
}
