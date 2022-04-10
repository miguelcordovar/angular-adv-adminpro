import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  // Doughnut
  public labels1: string[] = [ 'Papa', 'Camote', 'Cebolla' ];
  public data1: number[] = [ 80, 10, 10 ];

  public dataChart1 = {
    labels: this.labels1,
    datasets: [
      { data: this.data1 }
    ]
  };

}
