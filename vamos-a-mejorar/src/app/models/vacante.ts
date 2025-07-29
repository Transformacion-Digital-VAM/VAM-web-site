export interface Vacante {
    _id: string;
    titulo: string;
    area: string;
    descripcion: string;
    requisitos: string[];
    beneficios: string[];
    horario: { dias: string, horas: string };
    ubicacion: string;
    modalidad: string;
    tipo: string;
    fecha?: string;
}