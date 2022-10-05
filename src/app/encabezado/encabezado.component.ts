import { Component, OnChanges, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit, OnChanges, OnDestroy {

  public logo:string = "./assets/logo.png";
  public anchoLogo:number;
  public titulo:string = "Temporizador";

  constructor() {
    console.log("ENCABEZADO:constructor...");
    this.anchoLogo=100;
  }

  ngOnChanges():void {
    console.log("ENCABEZADO:ngOnChanges...");
  }

  ngOnInit(): void {
    console.warn("ENCABEZADO:ngOnInit...");
  }

  ngAfterViewInit():void{
    console.log("ENCABEZADO:ngAfterViewInit...");
  }

  ngOnDestroy():void{
    console.log("ENCABEZADO:ngOnDestroy...");
  }
}
