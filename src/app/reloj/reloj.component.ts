import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  //ATRIBUTOS
  public minutos: number = 14;
  public segundos: number = 59;
  public arrancado: boolean = false;

  //CONSTRUCTOR
  constructor() {
    console.log("En el constructor...");
  }

  public arrancarTemporizador(): void {
    if (this.arrancado == false) {
      this.arrancado = true;
      setInterval(() => {
        this.segundos--;
        if (this.segundos == -1) {
          this.segundos = 59;
          this.minutos--;
        }
      }, 1000);
    }
  }

  public reiniciarTemporizador(): void {
    this.segundos = 59;
    this.minutos = 14;
  }

  //MÉTODOS
  ngOnInit(): void {
    console.log("En el ngOnInit...");
  }
}