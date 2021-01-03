import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { LineChartOptions } from '../chart-options.interface';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit, AfterViewInit, OnChanges {

  constructor(private _du: DesignUtilityServices) { }


  //  @Input() chartData: ChartOptionData;
  @Input() chartData: LineChartOptions = {
    data: [35, 50, 45, 55, 50, 46, 60],
    chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  }
  // Area Char Start
  public areaChartData: ChartDataSets[];
  public areaChartLabels: Label[];
  public areaChartOptions: (ChartOptions) = {
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
          }
        },
      ]
    },
    legend: {
      display: false
    }
  };
  //   color = '#2962ff';
  color;
  public areaChartColors: Color[];
  public areaChartType: ChartType = 'line';

  @ViewChild("myCanvas") canvas: ElementRef;
  //   @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  // Area Char Ends

  ngOnInit(): void {
    this.chartInitialization();
  }

  ngAfterViewInit() {
    const gradient = this.canvas.nativeElement
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 150);
    gradient.addColorStop(1, this._du.hexToRgbA(this.color, 0));
    gradient.addColorStop(0, this._du.hexToRgbA(this.color, 0.5));
    this.areaChartColors = [
      {
        backgroundColor: gradient
      }
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    this.chartInitialization();
  }


  /**
   * chart initialization
   */
  chartInitialization() {
    // Area Char Start
    this.areaChartData = [
      { data: this.chartData.data, label: this.chartData.label ? this.chartData.label : 'Series A', borderWidth: this.chartData.borderWidth ? this.chartData.borderWidth : 2, pointRadius: this.chartData.pointRadius ? this.chartData.pointRadius : 2 }
    ];
    this.areaChartLabels = this.chartData.chartLabels;

    //   color = '#2962ff';
    this.color = this.chartData.color ? this.chartData.color : '#ffcc00';
    this.areaChartColors = [
      {
        backgroundColor: this._du.hexToRgbA(this.color, 0.2),
        borderColor: this.color,
        pointBackgroundColor: this._du.hexToRgbA(this.color, 0.8),
        pointHoverBackgroundColor: this.color,
      }
    ];
  }
}
