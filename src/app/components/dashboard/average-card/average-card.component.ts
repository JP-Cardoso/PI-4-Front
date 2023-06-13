import { Component, OnInit } from '@angular/core';
import { ReportsServiceService } from 'src/app/services/reports-service.service';

@Component({
  selector: 'app-average-card',
  templateUrl: './average-card.component.html',
  styleUrls: ['./average-card.component.scss']
})
export class AverageCardComponent implements OnInit {

  mediaTemperatura?: number = 0;
  mediaUmidade?: number = 0;
  desvioPadraoTemperatura?: number = 0;
  desvioPadraoUmidade?: number = 0;

  constructor(
    private service: ReportsServiceService
  ) {

  }

  ngOnInit(): void {
        this.getReport();
  }

  getReport() {
		this.service.getReportsAnalitic().subscribe(
			(res) => {
				// console.log(res);
        //[0].temperatura.media
        this.mediaTemperatura = res[0].temperatura.media;
        this.mediaUmidade = res[1].umidade.media;
        this.desvioPadraoTemperatura = res[0].temperatura.desvioPadraoAmostra;
        this.desvioPadraoUmidade = res[1].umidade.desvioPadraoAmostra;
			}
		)
	}

}
