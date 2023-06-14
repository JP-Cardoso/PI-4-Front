import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { ReportsServiceService } from 'src/app/services/reports-service.service';

@Component({
  selector: 'app-two-carts-in-line',
  templateUrl: './two-carts-in-line.component.html',
  styleUrls: ['./two-carts-in-line.component.scss']
})
export class TwoCartsInLineComponent implements OnInit {

  chart: any;
  mouistre: any = [];
  x?: any = [];
  y?: any = [];
  z?: any = [];

  constructor(
    private service: ReportsServiceService
  ) {

  }

  ngOnInit(): void {
    this.getReport()
  };

  getReport() {
		this.service.getReports().subscribe(
			(res) => {
				console.log(res);
				
				res.filter((item: any) => {
					this.mouistre.push({						
						x: new Date(item.dateInsert),
						y: Number(item.moustre),
            z: Number(item.temperature)
					})
				})
				this.getDataArray()
			}
		)

	};

	getDataArray() {
		console.log('entrou', this.mouistre.length);
		
		let data = this.mouistre
		for (let i = 0; i < data.length; i++) {
			// console.log(data[i]);
			
			this.x.push(((data[i].x).toTimeString()).slice(0,5))
			this.y.push(data[i].y)
      this.z.push(data[i].z)
		}
		// console.log(this.x);
    this.newChart()
	}

  newChart() {
    const twoChatsInLine = document.getElementById('twoChartsInLine') as HTMLCanvasElement;
    const chart = new Chart(twoChatsInLine, {
      type: 'line',
      data: {
        labels: this.x.reverse(),
        datasets: [
          {
            label: 'Umidade %',
            data: this.y.reverse(),
            borderColor: 'black',
            backgroundColor: '#33FFFF'
          },
          {
            label: 'Temperatura °C',
            data: this.z.reverse(),
            borderColor: 'black',
            backgroundColor: '#FF3333'
          }
        ]
      },
      options: {
        responsive: true
      }
    })
  }

}
