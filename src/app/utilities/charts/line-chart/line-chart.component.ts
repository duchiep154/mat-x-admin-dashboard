import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { LineChartOptions } from '../chart-options.interface';


@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {



  // Line Char Start
  @Input() chartInputData: LineChartOptions[] = [{
    data: [15, 30, 25, 35, 30, 26, 40],
    label: 'Series A',
    fill: false,
    color: '#2962ff',
    chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July']
  }];

  public lineChartLabels: Label[];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          display: true
        }
      }],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            display: true
          },
          // stacked: true
        }
      ]
    },
    legend: {
      display: false
    }
  };

  // myColor = '#ffcc00';
  public lineChartColors: Color[];
  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  // Line Char Ends 

  constructor(private _du: DesignUtilityServices) { }

  ngOnInit(): void {
    this.chartInitialization();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chartInitialization();
  }

  /**
   * set chart color
   * @param color 
   */
  getChartColor(color): any {
    return {
      backgroundColor: this._du.hexToRgbA(color, 0.2),
      borderColor: color,
      pointBackgroundColor: this._du.hexToRgbA(color, 0.8),
      pointHoverBackgroundColor: color
    }
  }
  /**
* chart initialization
*/
  chartInitialization() {
    this.lineChartLabels = this.chartInputData[0].chartLabels;
    this.lineChartColors = this.chartInputData.map(e => this.getChartColor(e.color));
  }
}
