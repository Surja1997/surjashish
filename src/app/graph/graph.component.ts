import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  // public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  // public pieChartData = [20, 30, 30, 20];
  // public pieChartType = 'pie';
 // Pie
 public pieChartOptions: ChartOptions = {
  responsive: true,
  legend: {
    position: 'left',
    labels: {
      fontColor: 'blanchedalmond'
  }
    
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        const label = ctx.chart.data.labels[ctx.dataIndex];
        return label;
      },
    },
  }
};
public pieChartLabels: Label[] = [['Coding'], ['Travelling'], ['blogging'],['Reading']];
  public pieChartData: number[] = [270, 250, 170,200];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
    backgroundColor: ['black','gray','white','blanchedalmond'],
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);

  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
  changeLegendPosition() {
    this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
  }

}
