import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  public logo:string="./assets/logo.png";
  public anchoLogo:number = 100;
  public titulo:string = "Temporizador";

  constructor() { 
  }

  ngOnInit(): void {
  }

}
