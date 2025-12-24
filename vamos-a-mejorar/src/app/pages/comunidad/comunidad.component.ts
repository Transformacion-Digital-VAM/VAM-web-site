import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { text } from 'node:stream/consumers';

@Component({
  selector: 'app-comunidad',
  standalone: false,
  templateUrl: './comunidad.component.html',
  styleUrls: ['./comunidad.component.css']
})
export class ComunidadComponent implements OnInit {
  tarjetas = [
    {
      id: 'artixan',
      titulo: 'Artixan',
      descripcion: 'Impulso a la Artesanía Mexicana',
      imagen: '/assets/artixan.jpeg',
      contenido: {
        titulo: 'Artixan',
        descripcion: 'En Vamos a Mejorar, apoyamos con orgullo a nuestros clientes artesanos a través de Artixan, una plataforma dedicada a impulsar sus creaciones hechas a mano.',
        detalles: 'Creemos firmemente en el valor de lo auténtico, lo hecho con el corazón y las manos. Por eso, trabajamos codo a codo con una comunidad de artesanos que han dedicado su vida a preservar y compartir la riqueza cultural de nuestro país.',
        iconos: [
          'assets/ods8.png',
          'assets/ods11.png'
        ]
      },
    },
    {
      id: 'atencion-personalizada',
      titulo: 'Atención Personalizada',
      descripcion: 'Atención hasta tu domicilio',
      imagen: '/assets/atencion2.png',
      contenido: {
        titulo: 'Atención Personalizada',
        descripcion: 'Nuestros asesores financieros visitan a los clientes en sus propios hogares para ofrecer atención personalizada, explicar cada detalle del crédito y acompañarlos paso a paso en el proceso.',
        detalles: 'Esta cercanía no solo facilita el trámite, también genera confianza y demuestra nuestro compromiso con cada persona que busca mejorar su situación económica. En Vamos a Mejorar, llevamos soluciones reales hasta donde tú estás.',
        iconos: [
          'assets/ods1.png',
          'assets/ods10.png'
        ]
      }
    },
    {
      id: 'inclusion',
      titulo: 'Inclusión Financiera',
      descripcion: 'Acceso financiero para todos.',
      imagen: '/assets/inclusion.jpg',
      contenido: {
        titulo: 'Inclusión Financiera',
        descripcion: 'En Vamos a Mejorar estamos comprometidos con la inclusión financiera, ofreciendo servicios tanto grupales como individuales que facilitan el acceso a soluciones financieras adaptadas a las necesidades de cada cliente.',
        detalles: 'Nuestro enfoque busca brindar apoyo cercano y personalizado para que todas las personas puedan mejorar su bienestar económico con confianza y facilidad, contribuyendo así al crecimiento de comunidades fuertes y autosuficientes.',
        iconos: [
          'assets/ods5.png',
          'assets/ods8.png',
          'assets/ods10.png'
        ]
      }
    },
    {
      id: 'despensas',
      titulo: 'Apoyo de Despensas',
      descripcion: 'Apoyo a la alimentación',
      imagen: 'https://www.caritas.org.mx/wp-content/uploads/2020/07/que-lleva-una-despensa-basica.jpg',
      contenido: {
        titulo: 'Apoyo de Despensas',
        descripcion: 'En Vamos a Mejorar, creemos en el poder de la colaboración para generar un impacto positivo. Por eso, nos hemos unido a la Fundación Nutrición y Vida, una organización comprometida con combatir la desnutrición en nuestra región mediante el acceso a alimentos básicos.',
        detalles: 'Gracias a esta alianza, no solo brindamos apoyo a nuestros clientes, sino también a personas en situación vulnerable. Este esfuerzo conjunto busca mejorar la calidad de vida de muchas familias y contribuir activamente al desarrollo social y comunitario.',
        iconos: [
          'assets/ods2.png',
          'assets/ods3.png'
        ]
      }
    },
    {
      id: 'circulo-vam',
      titulo: 'Círculo VAM',
      descripcion: 'Fortalecer el vínculo con nuestros clientes',
      imagen: '/assets/testimonio.jpg',
      contenido: {
        titulo: 'Círculo VAM',
        descripcion: 'Círculo VAM es un evento exclusivo diseñado para convivir y fortalecer el vínculo con nuestros clientes. Este espacio nace con el propósito de reconocer su compromiso y fidelidad, así como compartir los beneficios que disfrutan al formar parte de nuestra financiera.',
        detalles: 'Durante el evento, creamos un ambiente cercano mediante dinámicas interactivas, experiencias significativas y momentos de diálogo. En estos espacios, mostramos de forma clara cómo nuestros servicios contribuyen a su crecimiento y cómo pueden seguir obteniendo beneficios al trabajar con nosotros.',
        iconos: [
          'assets/ods4.png',
          'assets/ods5.png',
          'assets/ods8.png'
        ]
      }
    },
    {
      id: 'utiles',
      titulo: 'Entrega de Kits Escolares',
      descripcion: 'Un apoyo constante a nuestras familias',
      imagen: 'assets/kitutiles.jpeg',
      contenido: {
        titulo: 'Útiles Escolares',
        descripcion: 'En Vamos a Mejorar, creemos en el poder de la educación y en el valor de apoyar a nuestras comunidades. Por eso, desde hace más de 15 años, entregamos kits escolares gratuitos a los hijos e hijas de nuestros clientes, como parte del compromiso que tenemos con su calidad de vida y desarrollo.',
        detalles: 'Este programa ha beneficiado a miles de familias, ayudándolas a iniciar el ciclo escolar con las herramientas necesarias para un buen desempeño académico. Los kits incluyen útiles escolares de calidad.',
        iconos: [
          'assets/ods4.png',
          'assets/ods5.png',
          'assets/ods10.png'
        ]
      }
    },
    {
      id: 'generos',
      titulo: 'Igualdad de Género',
      descripcion: 'Reforzando el empoderamiento de mujeres',
      imagen: 'assets/generos.jpeg',
      contenido: {
        titulo: 'Igualdad de Género',
        descripcion: 'En vamos a Mejorar, promovemos la igualdad de género proporcionando empleos a mujeres, apoyándolas en su desarrollo personal y profesional. Con un 80% de nuestros empleados siendo mujeres, reafirmamos nuestro compromiso con la equidad y el empoderamiento femenino.',
        detalles: 'Creemos en un futuro donde todas las personas tengan las mismas oportunidades para crecer y prosperar, sin importar su género.',
        iconos: [
          'assets/ods5.png',
          'assets/ods8.png'
        ]
      }
    }
  ];

  modales = [
    {
      id: 'artixan',
      contenido: {
        titulo: 'Artixan',
        descripcion: 'Artixan fomenta el empleo digno y el crecimiento económico de artesanos locales, al tiempo que preserva la riqueza cultural de México.',
        impacto: 'Con ello, contribuye al ODS 8 y al ODS 11, fortaleciendo la identidad cultural y generando oportunidades económicas sostenibles.',
        lista: [
          { 
            texto: 'ODS 8: Trabajo decente y crecimiento económico', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/economic-growth/',
            descripcion: 'Artixan impulsa el empleo digno de artesanos locales, brindándoles mejores oportunidades laborales y estabilidad económica.' 
          },
          { 
            texto: 'ODS 11: Ciudades y comunidades sostenibles', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/cities/',
            descripcion: 'La empresa preserva tradiciones culturales y fortalece la identidad de las comunidades a través de la artesanía.' 
          }
        ],
        web: [
          {
            texto: 'Visita Artixan',
            enlace: 'https://artixan.com.mx/'
          }
        ]
      }
    },
    {
      id: 'atencion-personalizada',
      contenido: {
        titulo: 'Atención Personalizada',
        descripcion: 'La atención personalizada acerca los servicios financieros a quienes más los necesitan, promoviendo la inclusión y reduciendo desigualdades.',
        impacto: 'Esta iniciativa se vincula con el ODS 1 y el ODS 10, al facilitar el acceso a soluciones financieras de manera cercana y confiable.',
        lista: [
          { 
            texto: 'ODS 1: Fin de la pobreza', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/poverty/',
            descripcion: 'Facilita a personas en situación vulnerable el acceso a servicios financieros, reduciendo su riesgo de pobreza.' 
          },
          { 
            texto: 'ODS 10: Reducción de desigualdades', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/inequality/',
            descripcion: 'Promueve igualdad de oportunidades financieras al brindar atención adaptada a cada necesidad.' 
          }
        ]
      }
    },
    {
      id: 'inclusion',
      contenido: {
        titulo: 'Inclusión Financiera',
        descripcion: 'Al ofrecer servicios financieros accesibles para grupos e individuos, Vamos a Mejorar impulsa la igualdad de oportunidades económicas y fomenta comunidades más resilientes.',
        impacto: 'Esta labor está alineada con el ODS 5, el ODS 8 y el ODS 10, especialmente cuando se enfoca en el empoderamiento de mujeres.',
        lista: [
          { 
            texto: 'ODS 5: Igualdad de género', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/gender-equality/',
            descripcion: 'Incorpora a mujeres en servicios financieros, impulsando su autonomía económica.' 
          },
          { 
            texto: 'ODS 8: Trabajo decente y crecimiento económico', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/economic-growth/',
            descripcion: 'Brinda acceso a productos financieros que fortalecen la estabilidad laboral y el crecimiento económico.' 
          },
          { 
            texto: 'ODS 10: Reducción de desigualdades', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/inequality/',
            descripcion: 'Ofrece soluciones inclusivas que permiten a comunidades marginadas acceder a oportunidades económicas.' 
          }
        ]
      }
    },
    {
      id: 'despensas',
      contenido: {
        titulo: 'Apoyo de Despensas',
        descripcion: 'El programa de despensas garantiza el acceso a alimentos esenciales, promoviendo la seguridad alimentaria y el bienestar de las familias.',
        impacto: 'Esto contribuye directamente al ODS 2 y al ODS 3, apoyando comunidades más saludables y resilientes.',
        lista: [
          { 
            texto: 'ODS 2: Hambre cero', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/hunger/',
            descripcion: 'Contribuye a erradicar el hambre al proporcionar alimentos básicos a familias con dificultades.' 
          },
          { 
            texto: 'ODS 3: Salud y bienestar', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/health/',
            descripcion: 'Asegura la nutrición adecuada, promoviendo la salud y reduciendo riesgos de enfermedades relacionadas con la mala alimentación.' 
          }
        ]
      }
    },
    {
      id: 'circulo-vam',
      contenido: {
        titulo: 'Círculo VAM',
        descripcion: 'Círculo VAM fortalece los vínculos con los clientes mediante eventos interactivos.',
        impacto: 'Contribuye a la educación con el ODS 4, ODS 5 la igualdad de género y oportunidades económicas en el ODS 8 a través de capacitación, inclusión y actividades que impulsan la innovación y colaboración.',
        lista: [
          {
            texto: 'ODS 4: Educación de calidad',
            enlace: 'https://www.un.org/sustainabledevelopment/es/education/',
            descripcion: 'Ofrece capacitación y transferencia de conocimiento (talleres, charlas, materiales) que mejoran las capacidades financieras y productivas de los participantes.'
          },
          {
            texto: 'ODS 5: Igualdad de género',
            enlace: 'https://www.un.org/sustainabledevelopment/es/gender-equality/',
            descripcion: 'Incluye acciones para promover la participación y empoderamiento de mujeres (convocatorias inclusivas, talleres específicos y acceso a recursos/mentoría).'
          },
          {
            texto: 'ODS 8: Trabajo decente y crecimiento económico',
            enlace: 'https://www.un.org/sustainabledevelopment/es/economic-growth/',
            descripcion: 'Fomenta oportunidades de emprendimiento y mejora de capacidades que pueden traducirse en generación de ingresos y empleo local.'
          }
        ],
        enlace: ''
      }
    },
    {
      id: 'utiles',
      contenido: {
        titulo: 'Entrega de Kits Escolares',
        descripcion: 'Para nosotros, cada kit de apoyo entregado es una muestra del vínculo que construimos con nuestros clientes, más allá de lo financiero. Porque cuando crecen ellos, crecemos todos.',
        impacto: 'Esto se vincula con el ODS 4 y el ODS 5, además de contribuir al ODS 10 al ofrecer oportunidades equitativas en la educación.',
        lista: [
          { 
            texto: 'ODS 4: Educación de calidad', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/education/',
            descripcion: 'Apoya el acceso a materiales escolares que facilitan el aprendizaje y mejoran la calidad educativa.' 
          },
          { 
            texto: 'ODS 5: Igualdad de género', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/gender-equality/',
            descripcion: 'Promueve que mujeres y niñas accedan a educación equitativa al proveer insumos escolares.' 
          },
          { 
            texto: 'ODS 10: Reducción de desigualdades', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/inequality/',
            descripcion: 'Disminuye la brecha educativa al asegurar que más estudiantes tengan las mismas oportunidades de estudio.' 
          }
        ]
      }
    },
    {
      id: 'generos',
      contenido: {
        titulo: 'Igualdad de Género',
        descripcion: 'En Vamos a Mejorar impulsamos la participación activa de las mujeres en nuestro equipo, oportunidades para crecer profesional y personalmente. Reafirmamos nuestro compromiso con la equidad y la inclusión laboral.',
        impacto: 'Trabajamos por un entorno laboral donde todas las personas puedan desarrollarse plenamente, colaborando así a los ODS 5 y ODS 8, promoviendo la equidad de género y la justicia social.',
        lista: [
          { 
            texto: 'ODS 5: Igualdad de género', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/gender-equality/',
            descripcion: 'Lograr la igualdad entre los géneros y empoderar a todas las mujeres y las niñas.' 
          },
          { 
            texto: 'ODS 8: Trabajo decente y crecimiento económico', 
            enlace: 'https://www.un.org/sustainabledevelopment/es/economic-growth/',
            descripcion: 'Promover el crecimiento económico sostenido, inclusivo y sostenible, el empleo pleno y productivo y el trabajo decente para todos.' 
          }
        ]
      }
    }
  ];

  tarjetaSeleccionada: any = null;    // guarda la tarjeta que clickeaste
  modalSeleccionado: any = null;      // guarda el objeto modal correspondiente
  mostrarModal = false;

  // listener de teclado (método flecha para preservar "this")
private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.cerrarModal();
    }
  };

  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // sólo agregar listener si estamos en el navegador
    if (this.isBrowser) {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }

  ngOnDestroy(): void {
    // sólo remover si estamos en el navegador
    if (this.isBrowser) {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  flipCard(event: any, index: number): void {
    // Prevenir que el click en el botón dispare el flip
    if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
      return;
    }
    
    const card = event.currentTarget;
    card.classList.toggle('flipped');
  }

  abrirModal(tarjeta: any, event?: Event): void {
    // Si se recibe el event desde el (click) del botón, evitar propagación
    if (event) {
      event.stopPropagation();
    }

    this.tarjetaSeleccionada = tarjeta;

    // Buscar modal que coincida por id
    const encontrado = this.modales.find(m => m.id === tarjeta.id);

    if (encontrado) {
      this.modalSeleccionado = encontrado;
    } else {
      // fallback: usar el contenido de la tarjeta si no hay modal específico
      this.modalSeleccionado = {
        id: tarjeta.id,
        contenido: tarjeta.contenido
      };
    }

    this.mostrarModal = true;
  }

  cerrarModal(): void {
    this.mostrarModal = false;
    this.tarjetaSeleccionada = null;
    this.modalSeleccionado = null;
  }


  // tarjetaSeleccionada: any = null;
  // mostrarModal = false;

  // constructor() { }

  // ngOnInit(): void {
  // }

  // flipCard(event: any, index: number): void {
  //   // Prevenir que el click en el botón dispare el flip
  //   if (event.target.tagName === 'BUTTON' || event.target.closest('button')) {
  //     return;
  //   }
    
  //   const card = event.currentTarget;
  //   card.classList.toggle('flipped');
  // }

  // abrirModal(tarjeta: any): void {
  //   this.tarjetaSeleccionada = tarjeta;
  //   this.mostrarModal = true;
  // }

  // cerrarModal(): void {
  //   this.mostrarModal = false;
  //   this.tarjetaSeleccionada = null;
  // }
}