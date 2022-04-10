import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent {

  @Input('valor') progreso: number = 25;
  @Input() btnClass: string = 'btn btn-primary';

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number) {

    this.progreso = this.progreso + valor;

    if (this.progreso >= 100) {
       this.progreso = 100;
    } else if (this.progreso <= 0) {
      this.progreso = 0;
   }

   this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor: number) {

    if (nuevoValor >= 100) {
      nuevoValor = 100;
    } else if(nuevoValor <= 0) {
      nuevoValor = 0;
    } else {
      this.progreso = this.progreso + nuevoValor;
    }

    if (this.progreso >= 100) {
      this.progreso = 100;
   } else if (this.progreso <= 0) {
     this.progreso = 0;
  }

    this.valorSalida.emit(this.progreso);
  }
}
