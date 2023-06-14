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
            z: Number(item.temperature)
          })
        })
        this.getDataArray()
      }
    )

  };

  getDataArray() {
    console.log('entrou', this.data.length);

    let data = this.data
    for (let i = 0; i < data.length; i++) {     // console.log(data[i]);
      this.x.push(data[i].z)
      this.y.push(data[i].y)
    }
    // console.log(this.x);
    this.newChart()
  }


  newChart() {
    console.log(this.data);
    
    const scatter = document.getElementById('scatterPlot') as HTMLCanvasElement;
    const cnfig = {
      datasets: [{
        label: 'Scatter Dataset',
        data: this.data,
        backgroundColor: 'rgb(255, 99, 132)'
      }],
    }
    this.chart = new Chart(scatter, {
      type: 'scatter',
      data: cnfig,
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    })
  }
}
