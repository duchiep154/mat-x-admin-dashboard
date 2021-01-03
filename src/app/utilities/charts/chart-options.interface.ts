export class LineChartOptions {
    data: Array<any>; //[35, 50, 45, 55, 50, 46, 60],
    label?: string; // 'Series A',
    chartLabels?: Array<any>; // ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    borderWidth?: number; //2,
    pointRadius?: number; // 2,
    color?: string; // '#2962ff' 
    fill?: boolean;
}


export class BarChartOptions {
    lables: any[];
    chartData: ChartData[];
}

export class ChartData {
    data: Array<any> | number;
    label?: string;
    color?: string;
}
