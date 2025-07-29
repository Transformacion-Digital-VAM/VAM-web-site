import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { definePreset, palette } from '@primeng/themes';
import {AuraIndigo} from './theme'
import { TabsModule } from 'primeng/tabs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { MessageService } from 'primeng/api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreditoIndividualComponent } from './pages/credito-individual/credito-individual.component';
import { CostosComisionesComponent } from './pages/costos-comisiones/costos-comisiones.component';
import { UnidadEspecializadaComponent } from './pages/unidad-especializada/unidad-especializada.component';
import { EntidadesFinancierasComponent } from './pages/entidades-financieras/entidades-financieras.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SmothScrollDirective } from './pages/credito-grupal/smoth-scroll.directive';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { Error404Component } from './pages/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreditoIndividualComponent,
    CostosComisionesComponent,
    UnidadEspecializadaComponent,
    EntidadesFinancierasComponent,
    PopUpComponent,
    SmothScrollDirective,
    PreguntasFrecuentesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    MessageService,
    provideClientHydration(withEventReplay()),
     provideAnimationsAsync(),
      providePrimeNG({
        theme: {
          preset: AuraIndigo,
          options: {
            prefix: 'p',
            darkModeSelector: 'false',
            cssLayer: false
          }
        }
      })


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
