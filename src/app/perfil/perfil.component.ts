import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  constructor(public inyectado : UsuarioService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.inyectado.usuario.nombre = "Andrés"
  }

}
