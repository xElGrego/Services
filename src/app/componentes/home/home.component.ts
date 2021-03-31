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
    this.listArticulos.push(
      {
        titulo: 'Curso Angular',
        descripcion:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit tortor vestibulum, feugiat platea venenatis blandit vulputate turpis scelerisque ante, congue magna quisque vel odio dui rhoncus ac. Arcu augue dictum quis vulputate consequat mattis mus, faucibus at est urna himenaeos non pharetra praesent, parturient dui justo enim integer rutrum. Facilisi augue purus commodo mi himenaeos diam justo odio gravida litora, nec et pulvinar dictum nisl urna inceptos vivamus aliquet aenean, nostra vehicula imperdiet tristique lacus platea malesuada parturient placerat.',
        fecha: new Date(),
        usuario: `${this.inyectado.usuario.nombre} ${this.inyectado.usuario.apellido}`,
      },
      {
        titulo: 'Curso Asp.Net Core',
        descripcion:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit tortor vestibulum, feugiat platea venenatis blandit vulputate turpis scelerisque ante, congue magna quisque vel odio dui rhoncus ac. Arcu augue dictum quis vulputate consequat mattis mus, faucibus at est urna himenaeos non pharetra praesent, parturient dui justo enim integer rutrum. Facilisi augue purus commodo mi himenaeos diam justo odio gravida litora, nec et pulvinar dictum nisl urna inceptos vivamus aliquet aenean, nostra vehicula imperdiet tristique lacus platea malesuada parturient placerat.',
        fecha: new Date(),
        usuario: `${this.inyectado.usuario.nombre} ${this.inyectado.usuario.apellido}`,
      },
      {
        titulo: 'Curso Flutter',
        descripcion:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit tortor vestibulum, feugiat platea venenatis blandit vulputate turpis scelerisque ante, congue magna quisque vel odio dui rhoncus ac. Arcu augue dictum quis vulputate consequat mattis mus, faucibus at est urna himenaeos non pharetra praesent, parturient dui justo enim integer rutrum. Facilisi augue purus commodo mi himenaeos diam justo odio gravida litora, nec et pulvinar dictum nisl urna inceptos vivamus aliquet aenean, nostra vehicula imperdiet tristique lacus platea malesuada parturient placerat.',
        fecha: new Date(),
        usuario: `${this.inyectado.usuario.nombre} ${this.inyectado.usuario.apellido}`,
      }
    );
  }

  //Se recibe al articulo para enviarlo a la página de articulo-detalle
  iralDetalle(articulo: Articulo) {
    this.articuloInyectado.articulo = articulo;
    this.router.navigateByUrl('/articulo-detalle')
  }
}
