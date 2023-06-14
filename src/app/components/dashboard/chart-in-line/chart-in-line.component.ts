import { Component, OnInit } from '@angular/core';
import { CanvasJS } from '@canvasjs/angular-charts';
import { ReportsServiceService } from 'src/app/services/reports-service.service';
import Chart from 'chart.js/auto';


@Component({
	selector: 'app-chart-in-line',
	templateUrl: './chart-in-line.component.html',
	styleUrls: ['./chart-in-line.component.scss']
})
export class ChartInLineComponen implements OnInit {
	chart: any;
	temperature: any = []
	chartOptions: any;
	dataPoints: any = [];
	x: any = [];
	y: any = []
	constructor(
		private service: ReportsServiceService,
	) {
		this.getReport();
	}

	ngOnInit(): void {
	};

	getReport() {
		this.service.getReports().subscribe(
			(res) => {
				res.filter((item: any) => {
					this.temperature.push({
						x: new Date(item.dateInsert),
						y: Number(item.temperature),
					})
				})
				this.getDataArray()
			}
		)

	};

	getDataArray() {

		let data = this.temperature
		for (let i = 0; i < data.length; i++) {
			// console.log(data[i]);

			this.x.push(((data[i].x).toTimeString()).slice(0, 5))
			this.y.push(data[i].y)
		}
		// console.log(this.x);
		this.chatNew()
	}

	chatNew() {
		const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
		this.chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.x.reverse(),
				datasets: [
					{
						label: 'Temperatura °C',
						data: this.y.reverse(),
						borderColor: 'black',
						backgroundColor: '#FF3333'
					}	
				]
			},
			options: {
				responsive: true
			}
		});
	}



}
