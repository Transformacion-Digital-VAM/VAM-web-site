import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { Select } from 'primeng/select';
import { Button } from "primeng/button";
import { PresolicitudService } from '../../services/presolicitud.service';
import { MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Añade esta importación
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-presolicitud-credito',
  standalone: true,
  templateUrl: './presolicitud-credito.component.html',
  styleUrl: './presolicitud-credito.component.css',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, 
    InputTextModule, SelectModule, InputNumberModule, DatePickerModule, ReactiveFormsModule, CommonModule, ToastModule, DynamicDialogModule],
    providers: [MessageService]
})
export class PresolicitudCreditoComponent {

    formularioSolicitud: FormGroup;
    localidades = [
      { name: 'Dolores Hidalgo' },
      { name: 'San Diego de la Unión' },
      { name: 'San Miguel de Allende' },
      { name: 'San Luis de la Paz' },
      { name: 'San Felipe' },
      { name: 'Victoria' },
      { name: 'Otro' }
    ];

    creditos = [
      { name: 'Crédito Grupal' },
      { name: 'Crédito Individual' }
    ];

    opcionesCliente = [
      { name: 'Sí' },
      { name: 'No' }
    ];
date1: any;


    constructor(
    private fb: FormBuilder,
    private presolicitudService: PresolicitudService,
    private messageService: MessageService
  ) {
    this.formularioSolicitud = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      fechaNacimiento: [null, Validators.required],
      domicilio: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      localidad: [null, Validators.required],
      //creditoInteres: [null, Validators.required],
      clienteExistente: [null, Validators.required],
      monto: [null, [Validators.required, Validators.min(1000)]],
      terminosCondiciones:[null, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.formularioSolicitud.invalid) {
      this.marcarCamposInvalidos();
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor complete todos los campos requeridos correctamente'
      });
      return;
    }

    const solicitud = {
      ...this.formularioSolicitud.value,
      localidad: this.formularioSolicitud.value.localidad.name,
      //creditoInteres: this.formularioSolicitud.value.creditoInteres.name,
      clienteExistente: this.formularioSolicitud.value.clienteExistente.name
    };

    this.presolicitudService.guardarSolicitud(solicitud).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Tu información se ha enviada a un asesor para evaluar tu solicitud'
        });
        this.formularioSolicitud.reset();
      },
      error: (err) => {
        console.error(err);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Ocurrió un error al enviar la presolicitud'
        });
      }
    });
  }

  private marcarCamposInvalidos(): void {
    Object.values(this.formularioSolicitud.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  get f() {
    return this.formularioSolicitud.controls;
  }
}
