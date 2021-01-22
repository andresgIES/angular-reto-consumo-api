import { Component } from '@angular/core';
import { MarvelService } from 'src/app/services/marvel/marvel.service';

@Component({
  selector: 'app-consultar-personaje',
  templateUrl: './consultar-personaje.component.html',
  styleUrls: ['./consultar-personaje.component.css']
})
export class ConsultarPersonajeComponent  {

  constructor(private marvelService: MarvelService) { }

  nombre = '';
  imagenes: any[] = [];

  public buscar() {
    this.marvelService.getPersonaje(this.nombre).subscribe(
      (data) => {
        this.imagenes = data?.data?.results;
        console.log(this.imagenes);
      }
    );
  }

}
