import { Injectable } from '@angular/core';
import { Articulo } from '../models/articulo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  articulo: Articulo = new Articulo();
  
  ruta : string = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.ruta+'posts');
  }

  getUsers(userId : number): Observable<User>{
    return this.http.get<User>(this.ruta + 'users/'+userId)
  }

}
