import { Component, Input, OnInit } from '@angular/core';
import { Contacto } from '../contacto';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  //@Input() mensaje:string="";
  @Input() public contacto:Contacto = {"nombre":"","ciudad":""};

  constructor() { }

  ngOnInit(): void {
  }

}
