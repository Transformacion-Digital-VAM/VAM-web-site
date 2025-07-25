import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';

const routes: Routes = [
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
