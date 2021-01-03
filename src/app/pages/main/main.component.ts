import { Component, OnInit } from '@angular/core';
import { DesignUtilityServices } from 'src/app/appServices/design-utility.service';
import { BarChartOptions, ChartData, LineChartOptions } from 'src/app/utilities/charts/chart-options.interface';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  theme; // Global Theme
  


  trafficData: LineChartOptions = {
    data: [35, 50, 45, 55, 50, 60],
    chartLabels: ['January', 'February', 'March', 'April', 'May', 'June']
  }

  orderSharedData: ChartData[] = [
    { data: 120, label: 'Sales Q1', color: '#2962ff' }, // blue
    { data: 150, label: 'Sales Q2', color: '#ffd400' }, // yellow
    { data: 180, label: 'Sales Q3', color: 'red' }, // red
    { data: 90, label: 'Sales Q4', color: '#03bc6d' }, // green
  ];

  totalOrdersData: BarChartOptions = {
    lables: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    chartData: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales Q1', color: '#ffd400' },
      { data: [28, 48, 40, 19, 86, 27, 190], label: 'Sales Q2', color: '#2962ff' }
    ]
  };

  revenuData: LineChartOptions[] = [{
    data: [15, 28, 25, 32, 27, 33],
    label: 'Series A',
    fill: false,
    color: '#2962ff',
    chartLabels: ['January', 'February', 'March', 'April', 'May', 'June']
  }];

  constructor(private _du: DesignUtilityServices) {
  }

  ngOnInit(): void {
  
  }

}
