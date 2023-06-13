import { Component, OnInit } from '@angular/core';
import { ReportsServiceService } from 'src/app/services/reports-service.service';

@Component({
	selector: 'app-chart-in-line',
	templateUrl: './chart-in-line.component.html',
	styleUrls: ['./chart-in-line.component.scss']
})
export class ChartInLineComponen implements OnInit {
	chart: any;
	temperarture: any = []

	constructor(
		private service: ReportsServiceService,
	) {

	}

	ngOnInit(): void {
		this.getReport()
	};

	getReport() {
		this.service.getReports().subscribe(
			(res) => {
				// console.log(res);
				res.filter((item: any) => {
					this.temperarture.push({
						x: item.dateInsert,
						y: Number(item.temperature),
					})
				})
			}
		)
		console.log(this.temperarture);

	};

	dadosFormatados() {
		const dataPoints = [];
		for (let i = 0; i < this.temperarture.length; i++) {
			const dataPoint = {
				x: new Date(this.temperarture[i].x),
				y: Number(this.temperarture[i].y)
			};
			dataPoints.push(dataPoint);
		}
		return dataPoints;
	}

	chartOptions = {
		animationEnabled: true,
		theme: "light2",
		title: {
			text: "Temperatura ao Dia"
		},
		axisX: {
			valueFormatString: "D MMM"
		},
		axisY: {
			title: "Number of Sales"
		},
		toolTip: {
			shared: true
		},
		legend: {
			cursor: "pointer",
			itemclick: function (e: any) {
				if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
					e.dataSeries.visible = false;
				} else {
					e.dataSeries.visible = true;
				}
				e.chart.render();
			}
		},
		data: [{
			type: "line",
			showInLegend: true,
			name: "Projected Sales",
			xValueFormatString: "MMM DD, YYYY",
			dataPoints: this.dadosFormatados()
		}]
	}
}
