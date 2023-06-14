import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ReportsServiceService } from 'src/app/services/reports-service.service';


@Component({
  selector: 'app-scatter-plot',
  templateUrl: './scatter-plot.component.html',
  styleUrls: ['./scatter-plot.component.scss']
})
export class ScatterPlotComponent implements OnInit {

  chart: any
  data?: any = [];
  x?: any = [];
  y?: any = []
  constructor(
    private service: ReportsServiceService
  ) {

  }

  ngOnInit(): void {
    this.getReport()
  }


  getReport() {
    this.service.getReports().subscribe(
      (res) => {
        console.log(res);

        res.filter((item: any) => {
          this.data.push({
            // x: new Date(item.dateInsert),
            y: Number(item.moustre),
            x: Number(item.temperature)
          })
        })
        this.newChart()
      }
    )

  };


  newChart() {
    console.log(this.data);

    const scatter = document.getElementById('scatterPlot') as HTMLCanvasElement;
    const cnfig = {
      datasets: [{
        label: 'Disperção Entre Umidade e Temperatura',
        data: this.data,
        // backgroundColor: 'rgb(255, 99, 132)'
      }],
    }
    this.chart = new Chart(scatter, {
      type: 'scatter',
      data: cnfig,
      options: {
        scales: {
          x: {
            // label: 'Umidade',
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    })
  }
}
