import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula:Pelicula|any;

  constructor() { }

  ngOnInit(): void {
  }

}
