import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { VacantesComponent } from './pages/vacantes/vacantes.component';
import { CardVacanteComponent } from './pages/card-vacante/card-vacante.component';

const routes: Routes = [
  {path: 'vacantes', component: VacantesComponent},
  // {path: 'card-vacante', component: CardVacanteComponent},
  { path: 'vacante/:id', component: CardVacanteComponent },
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'testimonios', component: TestimoniosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
