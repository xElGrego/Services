import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { User } from 'src/app/models/users';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.scss'],
})
export class ArticuloDetalleComponent implements OnInit {
  articulo: Articulo = new Articulo();
  usuario: User = new User();
  constructor(private articuloInyectado: ArticuloService) {
    this.articulo = this.articuloInyectado.articulo;
  }

  ngOnInit(): void {
    this.articuloInyectado.getUsers(this.articulo.id).subscribe((userApi)=>{
      this.usuario = userApi;
    })
  }
}
