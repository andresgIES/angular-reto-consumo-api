import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarPersonajeComponent } from './components/consultar-personaje/consultar-personaje.component';

const routes: Routes = [
  { path: 'consultar', component: ConsultarPersonajeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
