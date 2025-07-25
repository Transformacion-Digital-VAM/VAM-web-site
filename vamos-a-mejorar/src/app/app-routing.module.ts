import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CreditoGrupalComponent } from './pages/credito-grupal/credito-grupal.component';
import { CreditoIndividualComponent } from './pages/credito-individual/credito-individual.component';
import { PresolicitudCreditoComponent } from './pages/presolicitud-credito/presolicitud-credito.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'credito-grupal', component: CreditoGrupalComponent},
  {path: 'credito-individual', component: CreditoIndividualComponent},
  {path: 'presolicitar-credito', component: PresolicitudCreditoComponent},
  {path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
