import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VacantesService, Vacante } from '../../service/vacantes.service';
import { PostulacionService } from '../../service/postulacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-vacante',
  standalone: false,
  templateUrl: './card-vacante.component.html',
  styleUrls: ['./card-vacante.component.css']
})
export class CardVacanteComponent implements OnInit {
  vacante: Vacante | null = null;
  loading = true;
  error: string | null = null;

  modalOpen = false;
  submitting = false;
  fileData: File | null = null;
  fileError: string | null = null;

  form = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  };

  constructor(
    private route: ActivatedRoute,
    private vacantesService: VacantesService,
    private postulacionService: PostulacionService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.vacantesService.getVacanteById(id).subscribe({
      next: v => {
        this.vacante = v;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudo cargar la vacante';
        this.loading = false;
      }
    });
  }

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.fileData = null;
    this.fileError = null;
  }

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
    // 1) Validaciones de campos
    if (!this.form.nombre.trim() ||
      !this.form.telefono.trim() ||
      !this.form.email.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor completa nombre, teléfono y correo.',
      });
      return;
    }

    // Validar formato de email con regex simple
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.form.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email inválido',
        text: 'Ingresa un correo con formato válido.',
      });
      return;
    }

    if (!this.fileData) {
      this.fileError = 'Adjunta tu CV en PDF';
      Swal.fire({
        icon: 'info',
        title: 'CV faltante',
        text: 'Por favor adjunta tu currículum en formato PDF.',
      });
      return;
    }

    // Asegúrate de que this.vacante no sea null antes de acceder a sus propiedades
    if (!this.vacante) {
      Swal.fire({
        icon: 'error',
        title: 'Error de Vacante',
        text: 'No se pudo obtener la información de la vacante para postular.',
      });
      return;
    }

    // 2) Prepara y envía
    this.submitting = true;
    const data = new FormData();
    data.append('vacanteId', this.vacante._id);
    // Se añade el nombre de la vacante al FormData
    data.append('titulo', this.vacante.titulo);
    data.append('nombre', this.form.nombre.trim());
    data.append('telefono', this.form.telefono.trim());
    data.append('email', this.form.email.trim());
    data.append('mensaje', this.form.mensaje.trim());
    data.append('cv', this.fileData);

    this.postulacionService.enviarPostulacion(data).subscribe({
      next: () => {
        // 3) Notificación de éxito
        Swal.fire({
          icon: 'success',
          title: '¡Enviado!',
          text: 'Tu postulación se ha enviado correctamente.',
          timer: 2500,
          showConfirmButton: false
        });
        this.closeModal();
        this.submitting = false;
      },
      error: (err) => {
        console.error('Error enviando postulación:', err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar tu postulación. Intenta más tarde.',
        });
        this.submitting = false;
      }
    });
  }

}
