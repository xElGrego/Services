import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss']
})
export class ArticuloDetalleComponent implements OnInit {

  articulo : Articulo = new Articulo();
  constructor(public articuloInyectado : ArticuloService) { 
    this.articulo = articuloInyectado.articulo;
  }

  ngOnInit(): void {
  }

}
