import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/pelicula';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  public nuevaPelicula:Pelicula = {"titulo":"","director":"","imagen":""};

  peliculas:Pelicula[] = [
    {"titulo":"El resplandor","director":"Kubrick","imagen":"https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg"},
    {"titulo":"Batman","director":"Burton","imagen":"http://1.bp.blogspot.com/-7mp36JiaIwU/U8aJS_dZrcI/AAAAAAAAKZc/AXF3ImZ74Qk/s1600/batman+89+cartel.jpg"},
    {"titulo":"Alien","director":"Ridley Scott","imagen":"https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2022/05/Alien-cover.jpg?ssl=1"},
    {"titulo":"El resplandor","director":"Kubrick","imagen":"https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg"},
    {"titulo":"Batman","director":"Burton","imagen":"http://1.bp.blogspot.com/-7mp36JiaIwU/U8aJS_dZrcI/AAAAAAAAKZc/AXF3ImZ74Qk/s1600/batman+89+cartel.jpg"},
    {"titulo":"Alien","director":"Ridley Scott","imagen":"https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2022/05/Alien-cover.jpg?ssl=1"},
    {"titulo":"El resplandor","director":"Kubrick","imagen":"https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg"},
    {"titulo":"Batman","director":"Burton","imagen":"http://1.bp.blogspot.com/-7mp36JiaIwU/U8aJS_dZrcI/AAAAAAAAKZc/AXF3ImZ74Qk/s1600/batman+89+cartel.jpg"},
    {"titulo":"Alien","director":"Ridley Scott","imagen":"https://i0.wp.com/www.tomosygrapas.com/wp-content/uploads/2022/05/Alien-cover.jpg?ssl=1"},
    {"titulo":"El resplandor","director":"Kubrick","imagen":"https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  agregarPelicula():void {
    this.peliculas.push({...this.nuevaPelicula});
  }

}
