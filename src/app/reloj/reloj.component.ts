import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  public minutos:number=10;
  public segundos:number=59;
  constructor() { 
    console.log("En el constructor...");
    setInterval(()=>{
      this.segundos--;
      if (this.segundos==-1) {
        this.segundos=59;
        this.minutos--;
      }
    },1000);
  }

  ngOnInit(): void {
    console.log("En el ngOnInit...");
  }

}
