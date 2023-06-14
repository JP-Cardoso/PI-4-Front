import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ReportsServiceService } from 'src/app/services/reports-service.service';

@Component({
  selector: 'app-chart-in-line-moustre',
  templateUrl: './chart-in-line-moustre.component.html',
  styleUrls: ['./chart-in-line-moustre.component.scss']
})
export class ChartInLineMoustreComponent implements OnInit {
	
	chart: any;
	mouistre: any = []
	x: any = [];
	y: any = []

	constructor(
		private service: ReportsServiceService
	) {
		this.getReport()

	}

	ngOnInit(): void {
	}

	getReport() {
		this.service.getReports().subscribe(
			(res) => {
				console.log(res);
				
				res.filter((item: any) => {
					this.mouistre.push({						
						x: new Date(item.dateInsert),
						y: Number(item.moustre),
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
		}
		// console.log(this.x);
		this.chatNew()	
	}


	chatNew() {
		const ctx = document.getElementById('lineChartMouistre') as HTMLCanvasElement;
		this.chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.x.reverse(),
				datasets: [
					{
						label: 'Umidade %',
						data: this.y.reverse(),
						borderColor: 'black',
						backgroundColor: 'rgba(255,0,0,0.3)'
					}
				]
			},
			options: {
				responsive: true
			}
		});
	}


}