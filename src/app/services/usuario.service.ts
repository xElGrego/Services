import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario: Usuario = new Usuario();
  constructor() {
   
  }
}
