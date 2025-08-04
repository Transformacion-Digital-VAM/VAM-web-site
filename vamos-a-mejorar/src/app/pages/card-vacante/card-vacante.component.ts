// src/app/vacantes/card-vacante.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Vacante } from '../../services/vacantes.service';
import { PostulacionService } from '../../services/postulacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-vacante',
  standalone: false,
  templateUrl: './card-vacante.component.html',
  styleUrls: ['./card-vacante.component.css']
})
export class CardVacanteComponent {
  @Input() vacante!: Vacante;
  @Output() close = new EventEmitter<void>();

  submitting = false;
  fileData: File | null = null;
  fileError: string | null = null;

  form = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  };

  constructor(private postulacionService: PostulacionService) {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (file && file.type !== 'application/pdf') {
      this.fileError = 'Solo se permiten archivos PDF';
      this.fileData = null;
    } else {
      this.fileError = null;
      this.fileData = file;
    }
  }

  submitForm() {
    // Validaciones
    if (!this.form.nombre.trim() || !this.form.telefono.trim() || !this.form.email.trim()) {
      Swal.fire('Campos incompletos', 'Por favor completa nombre, teléfono y correo.', 'warning');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.form.email)) {
      Swal.fire('Email inválido', 'Ingresa un correo con formato válido.', 'error');
      return;
    }
    if (!this.fileData) {
      Swal.fire('CV faltante', 'Por favor adjunta tu currículum en formato PDF.', 'info');
      return;
    }

    // Preparamos FormData
    const data = new FormData();
    // Si quieres enviar el título de la vacante:
    data.append('titulo', this.vacante.titulo);
    data.append('nombre', this.form.nombre.trim());
    data.append('telefono', this.form.telefono.trim());
    data.append('email', this.form.email.trim());
    data.append('mensaje', this.form.mensaje.trim());
    data.append('cv', this.fileData);

    this.submitting = true;
    this.postulacionService.enviarPostulacion(data).subscribe({
      next: () => {
        Swal.fire({ icon: 'success', title: '¡Enviado!', timer: 2000, showConfirmButton: false });
        this.submitting = false;
        this.close.emit();
      },
      error: () => {
        Swal.fire('Error', 'Hubo un problema al enviar tu postulación. Intenta más tarde.', 'error');
        this.submitting = false;
      }
    });
  }

  onClose() {
    this.close.emit();
  }
}
