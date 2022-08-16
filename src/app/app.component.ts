import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mi_primera_vez_con_angular';
  edad: number = 21;
  direccion: string = "calle falsa 212"
  rol: String= "rol falso"
  sumar(numero1:number,numero2:number): number {
    return numero1 + numero2;
  }
  restar(numero1:number,numero2:number): number {
    return numero1 - numero2;
  }
  multiplicar(numero1:number,numero2:number): number{
    return numero1 * numero2;
  }
}
