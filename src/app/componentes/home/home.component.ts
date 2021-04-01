import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulo } from 'src/app/models/articulo';
import { ArticuloService } from 'src/app/services/articulo.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listArticulos: Array<Articulo> = new Array<Articulo>();
  constructor(
    public inyectado: UsuarioService,
    public articuloInyectado: ArticuloService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.articuloInyectado.getArticulos().subscribe((articulos) => {
      //La información recibida de la api la guardamos en la variable listArticulos
      this.listArticulos = articulos;
    });
  }

  //Se recibe al articulo para enviarlo a la página de articulo-detalle
  iralDetalle(articulo: Articulo) {
    this.articuloInyectado.articulo = articulo;
    this.router.navigateByUrl('/articulo-detalle');
  }
}
