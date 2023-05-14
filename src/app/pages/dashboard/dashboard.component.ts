import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    }
  };
  public pieChartLabels = ['Download', 'Sales'];
  public pieChartDatasets = [ {
    data: [ 60, 40 ]
  } ];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  public barChartData: any = {
    labels: [" In-Active Vehicles"," Active Vehicles"],
    datasets: [
      {
        label: ["60%"],
        data: ["60","40"],
        backgroundColor: ["#CAE4FA","#1070C5"],
        hoverBackgroundColor: ["#CAE4FA","#1070C5"],
        
      }
    ]
  }

  
  constructor() {}

  ngOnInit(): void {
    
  }

}
