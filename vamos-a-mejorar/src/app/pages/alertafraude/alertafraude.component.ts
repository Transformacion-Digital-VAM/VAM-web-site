import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alertafraude',
  standalone: false,
  template: `<div></div>`,
  styleUrls: ['./alertafraude.component.css']
})
export class AlertafraudeComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const mostrado = localStorage.getItem('alertaFraudeMostrada');
    if (!mostrado) {
      Swal.fire({
        title: '<strong style="color: #0f2955; font-size: 1.8em;">¡ALERTA DE FRAUDE!</strong>',
        html: `
          <div style="text-align: center; max-width: 750px; margin: 0 auto;">
            <div style="border-left: 4px solid #0f2955; padding-left: 15px; margin: 20px 0;">
              <p style="font-size: 1.1em; line-height: 1.6;">
                Informamos a todo el público en general que estamos ante un caso de 
                <strong style="color: #0f2955;">Suplantación de Identidad</strong> por parte de una empresa 
                <strong style="color: #0f2955;">FALSA</strong> que se hace pasar por 
                <strong style="color: #0056b3;">VAMOS A MEJORAR</strong>.
              </p>
            </div>
            
            <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #eee; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <h3 style="color: #2c3e50; margin-bottom: 15px; font-size: 1.3em;">NOSOTROS:</h3>
              <ul style="text-align: left; font-size: 1.05em; line-height: 1.7; padding-left: 20px; margin: 0 auto; display: table;">
                <li style="margin-bottom: 10px;"><span style="color: #d33; font-weight: bold;">NO</span> solicitamos depósitos adelantados</li>
                <li style="margin-bottom: 10px;">Cobertura únicamente en <strong>Guanajuato</strong></li>
                <li style="margin-bottom: 10px;">Manejamos crédito <strong>grupal</strong></li>
                <li style="margin-bottom: 10px;">No enviamos documentación vía <strong>WhatsApp</strong></li>
                <li>No realizamos trámites <strong>telefónicos</strong> ni por <strong>redes sociales</strong></li>
              </ul>
            </div>
            
            <p style="font-style: italic; font-size: 1.05em; color: #555; margin: 20px 0;">
              Nos deslindamos de cualquier situación de esta índole.
            </p>
            
            <div style="background-color: #22ff6ca2; border-left: 4px solid #2196f3; padding: 15px; margin: 25px 0; border-radius: 0 8px 8px 0;">
              <p style="margin: 0; font-size: 1.1em;">
                Para verificación: <br>
                <span style="font-size: 1.3em; font-weight: bold; color: #0066cc;">WhatsApp: 4181544583</span>
              </p>
            </div>
          </div>
        `,
        icon: 'warning',
        iconHtml: '<i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: #d33;"></i>',
        confirmButtonText: 'ENTENDIDO',
        confirmButtonColor: '#22ff6ca2',
        allowOutsideClick: false,
        width: '850px',
        padding: '2em',
        backdrop: 'rgba(0,0,0,0.7)',
        customClass: {
          popup: 'custom-swal-popup',
          title: 'custom-swal-title',
          confirmButton: 'custom-swal-button'
        }
      });
      
      localStorage.setItem('alertaFraudeMostrada', 'true');
    }
  }
}