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
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CardVacanteComponent } from './pages/card-vacante/card-vacante.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { AsesorVirtualComponent } from './pages/asesor-virtual/asesor-virtual.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';

const routes: Routes = [
  {path: 'vacantes', component: VacantesComponent},
  {path: 'vacante/:id', component: CardVacanteComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'comunidad', component: ComunidadComponent},
  {path: 'testimonios', component: TestimoniosComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'credito-grupal', component: CreditoGrupalComponent},
  {path: 'credito-individual', component: CreditoIndividualComponent},
  {path: 'beneficios', component: BeneficiosComponent},
  {path: 'costos-comisiones', component: CostosComisionesComponent},
  {path: 'unidad-especializada', component: UnidadEspecializadaComponent},
  {path: 'entidades-financieras', component: EntidadesFinancierasComponent},
  {path: 'presolicitar-credito', component: PresolicitudCreditoComponent},
  {path: 'preguntas-frecuentes', component: PreguntasFrecuentesComponent},
  {path: 'asesor-virtual', component: AsesorVirtualComponent},

  {path: 'error404', component: Error404Component},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
