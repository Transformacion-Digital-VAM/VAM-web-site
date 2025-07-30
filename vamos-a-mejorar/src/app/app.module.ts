import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { definePreset, palette } from '@primeng/themes';
import {AuraIndigo} from './theme';
import { PanelModule } from 'primeng/panel';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule }    from 'primeng/button';
import { CardModule }      from 'primeng/card';
import { CarouselModule }  from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollTopModule } from 'primeng/scrolltop';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { VacantesComponent } from './pages/vacantes/vacantes.component';
import { CardVacanteComponent } from './pages/card-vacante/card-vacante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditoIndividualComponent } from './pages/credito-individual/credito-individual.component';
import { CostosComisionesComponent } from './pages/costos-comisiones/costos-comisiones.component';
import { UnidadEspecializadaComponent } from './pages/unidad-especializada/unidad-especializada.component';
import { EntidadesFinancierasComponent } from './pages/entidades-financieras/entidades-financieras.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SmothScrollDirective } from './pages/credito-grupal/smoth-scroll.directive';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';
import { Error404Component } from './pages/error404/error404.component';
import { MessageService } from 'primeng/api';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    // InicioComponent,
    NosotrosComponent,
    TestimoniosComponent,
    ComunidadComponent,
    VacantesComponent,
    CardVacanteComponent,
    // CreditoGrupalComponent,
    // CreditoIndividualComponent,
    CreditoIndividualComponent,
    CostosComisionesComponent,
    UnidadEspecializadaComponent,
    EntidadesFinancierasComponent,
    PopUpComponent,
    SmothScrollDirective,
    PreguntasFrecuentesComponent,
    Error404Component,
    ChatBotComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    PanelModule,
    FileUploadModule,
    ButtonModule,
    PanelModule,
    CardModule,
    CarouselModule,
    ScrollTopModule,
    TabsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
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
