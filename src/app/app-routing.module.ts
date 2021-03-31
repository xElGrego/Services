import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './componentes/articulo-detalle/articulo-detalle.component';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  {
    path: '', component : HomeComponent
  },
  {
    path : 'perfil',component :PerfilComponent
  },
  {
    path : 'articulo-detalle',component: ArticuloDetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
