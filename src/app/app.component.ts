import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number; //El ? significa que este valor puede ser nulo o no
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Miprimerapp';
  public ArregloTarjetas:Tarjeta[]=[]

  ngOnInit(){

    this.ArregloTarjetas = [
      {titulo: 'Video 1', subtitulo: 'Subtitulo Video 1'},
      {titulo: 'Video 2', subtitulo: 'Subtitulo Video 2'},
      {titulo: 'Video 3', subtitulo: 'Subtitulo Video 3'},
    ]
  }
}
