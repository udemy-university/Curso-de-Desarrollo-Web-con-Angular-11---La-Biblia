import { Component, OnInit } from '@angular/core';

/**
 * Podemos usar la propiedad templateUrl por si ponemos un archivo aparte o si usamos la propiedad template. podemos poner el html directo ahi (poco recomendable).
 * Podemos usar la propiedad stylesUrls para poner la cantidad de hojas de css que queramos o podemos usar la propiedad styles: [`estilos`] si no queremos hacer otro archivo.
 */

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
