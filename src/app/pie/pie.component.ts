import { Component, OnInit } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  public contacto:Contacto = {"nombre":"Rosa.SA","ciudad":"Leganés"};
  
  constructor() { }

  ngOnInit(): void {
  }

}
