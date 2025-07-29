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
import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { CreditoGrupalComponent } from './pages/credito-grupal/credito-grupal.component';
import { CreditoIndividualComponent } from './pages/credito-individual/credito-individual.component';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { ComunidadComponent } from './pages/comunidad/comunidad.component';
import { VacantesComponent } from './pages/vacantes/vacantes.component';
import { CardVacanteComponent } from './pages/card-vacante/card-vacante.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
