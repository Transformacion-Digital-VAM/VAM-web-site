import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CreditoGrupalComponent } from './pages/credito-grupal/credito-grupal.component';
import { CreditoIndividualComponent } from './pages/credito-individual/credito-individual.component';
import { PresolicitudCreditoComponent } from './pages/presolicitud-credito/presolicitud-credito.component';
import { CostosComisionesComponent } from './pages/costos-comisiones/costos-comisiones.component';
import { UnidadEspecializadaComponent } from './pages/unidad-especializada/unidad-especializada.component';
import { EntidadesFinancierasComponent } from './pages/entidades-financieras/entidades-financieras.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { Error404Component } from './pages/error404/error404.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { VacantesComponent } from './pages/vacantes/vacantes.component';
import { CardVacanteComponent } from './pages/card-vacante/card-vacante.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

const routes: Routes = [
  {path: 'vacantes', component: VacantesComponent},
  // {path: 'card-vacante', component: CardVacanteComponent},
  {path: 'nosotros', component: NosotrosComponent},
  { path: 'vacante/:id', component: CardVacanteComponent },
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'testimonios', component: TestimoniosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'credito-grupal', component: CreditoGrupalComponent},
  {path: 'credito-individual', component: CreditoIndividualComponent},
  {path: 'costos-comisiones', component: CostosComisionesComponent},
  {path: 'unidad-especializada', component: UnidadEspecializadaComponent},
  {path: 'entidades-financieras', component: EntidadesFinancierasComponent},
  {path: 'presolicitar-credito', component: PresolicitudCreditoComponent},
  {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'error404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
