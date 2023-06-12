import { Component, OnInit } from '@angular/core';
import { ReportsServiceService } from 'src/app/services/reports-service.service';

@Component({
  selector: 'app-average-card',
  templateUrl: './average-card.component.html',
  styleUrls: ['./average-card.component.scss']
})
export class AverageCardComponent implements OnInit {

  mediaTemperatura!: number;
  mediaUmidade!: number;
  desvioPadrãoTemperatura!: number;
  desvioPadrãoUmidade!: number;

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
				console.log(res);
        //[0].temperatura.media
        this.mediaTemperatura = res[0].temperatura.media;
        this.mediaUmidade = res[1].umidade.media;
        this.desvioPadrãoTemperatura = res[0].temperatura.desvioPadraoAmostra;
        this.desvioPadrãoUmidade = res[1].umidade.desvioPadraoAmostra;
			}
		)
	}

}
