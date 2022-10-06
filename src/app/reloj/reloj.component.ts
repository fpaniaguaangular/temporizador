import { Component, OnInit } from '@angular/core';

const verde:string = "background-color:green";
const rojo:string = "background-color:red";

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  public verde:string = "background-color:green";
  public rojo:string = "background-color:red";


  //ATRIBUTOS
  public minutos: number = 14;
  public segundos: number = 59;
  public arrancado: boolean = false;

  public colorStart:string = verde;
  public colorStop:string = rojo;

  private intervalo:any;

  //CONSTRUCTOR
  constructor() {
    console.log("RELOJ:En el constructor...");
  }


  public arrancarTemporizador(infoEvento:any): void {
    console.log(infoEvento);
    if (this.arrancado == false) {
      this.colorStart=rojo;
      this.colorStop=verde;
      this.arrancado = true;
      this.intervalo = setInterval(() => {
        this.segundos--;
        if (this.segundos == -1) {
          this.segundos = 59;
          this.minutos--;
        }
      }, 1000);
    }
  }

  public reiniciarTemporizador(): void {
    this.colorStart=verde;
    this.colorStop=rojo;
    clearInterval(this.intervalo);
    this.arrancado=false;
    this.segundos = 59;
    this.minutos = 14;
  }

  public seleccionarTiempo(evento:any): void {
    this.minutos = evento.target.value;
  }

  //MÉTODOS
  ngOnInit(): void {
    console.log("RELOJ:En el ngOnInit...");
  }
}