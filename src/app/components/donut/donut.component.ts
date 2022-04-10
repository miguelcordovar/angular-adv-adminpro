import { Component, Input } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

@Input('title')
title = "Sin titulo";

labels: string[] = [ 'Label1', 'Label2', 'Label3' ];

dataN: number[] = [ 350, 450, 100 ];

@Input('data')
doughnutChartData: ChartData<'doughnut'> = {
  labels: this.labels,
  datasets: [
    { data: this.dataN }
  ]
};

// events
public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  console.log(event, active);
}

}
