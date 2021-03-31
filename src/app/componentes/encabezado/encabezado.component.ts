import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor(public usuarioInyectado:UsuarioService) { }

  ngOnInit(): void {
  }

  cambiandoNombre(){
    this.usuarioInyectado.usuario.nombre = "Tercer Nombre"
  }


}
