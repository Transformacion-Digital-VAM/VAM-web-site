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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreditoIndividualComponent } from './pages/credito-individual/credito-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CreditoIndividualComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabsModule,
    CommonModule
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
