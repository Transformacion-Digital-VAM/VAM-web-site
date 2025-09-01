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
      }
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
      }
    },
    {
      id: 'inclusion',
      titulo: 'Inclución Financiera',
      descripcion: 'Acceso financiero para todos.',
      imagen: '/assets/inclusion.jpg',
      contenido: {
        titulo: 'Inclución Financiera',
        descripcion: 'En Vamos a Mejorar estamos comprometidos con la inclusión financiera, ofreciendo servicios tanto grupales como individuales que facilitan el acceso a soluciones financieras adaptadas a las necesidades de cada cliente.',
        detalles: 'Nuestro enfoque busca brindar apoyo cercano y personalizado para que todas las personas puedan mejorar su bienestar económico con confianza y facilidad, contribuyendo así al crecimiento de comunidades fuertes y autosuficientes.'
      }
    },
    {
      id: 'despensas',
      titulo: 'Apoyo de Despensas',
      descripcion: 'Apoyo de entrega de despensas para familias.',
      imagen: 'https://www.caritas.org.mx/wp-content/uploads/2020/07/que-lleva-una-despensa-basica.jpg',
      contenido: {
        titulo: 'Apoyo de Despensas',
        descripcion: 'En Vamos a Mejorar, creemos en el poder de la colaboración para generar un impacto positivo. Por eso, nos hemos unido a la Fundación Nutrición y Vida, una organización comprometida con combatir la desnutrición en nuestra región mediante el acceso a alimentos básicos.',
        detalles: 'Gracias a esta alianza, no solo brindamos apoyo a nuestros clientes, sino también a personas en situación vulnerable. Este esfuerzo conjunto busca mejorar la calidad de vida de muchas familias y contribuir activamente al desarrollo social y comunitario.'
      }
    },
    {
      id: 'circulo-vam',
      titulo: 'Círculo VAM',
      descripcion: 'Soluciones tecnológicas para el desarrollo social',
      imagen: '/assets/testimonio.jpg',
      contenido: {
        titulo: 'Círculo VAM',
        descripcion: 'Círculo VAM es un evento exclusivo diseñado para convivir y fortalecer el vínculo con nuestros clientes. Este espacio nace con el propósito de reconocer su compromiso y fidelidad, así como compartir los beneficios que disfrutan al formar parte de nuestra financiera.',
        detalles: 'Durante el evento, creamos un ambiente cercano mediante dinámicas interactivas, experiencias significativas y momentos de diálogo. En estos espacios, mostramos de forma clara cómo nuestros servicios contribuyen a su crecimiento y cómo pueden seguir obteniendo beneficios al trabajar con nosotros.'
      }
    },
    {
      id: 'utiles',
      titulo: 'Útiles Escolares',
      descripcion: 'Programas de apoyo a nuestros clientes',
      imagen: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      contenido: {
        titulo: 'Útiles Escolares',
        descripcion: 'Nuestros programas específicos para mujeres buscan reducir la brecha de género y promover la independencia económica. A través de capacitación, mentoría y acceso a recursos, ayudamos a mujeres a convertirse en agentes de cambio en sus comunidades.',
        detalles: 'Desarrollamos iniciativas de liderazgo, emprendimiento femenino, educación financiera y prevención de violencia de género, siempre con un enfoque interseccional que considera las diversas realidades de las mujeres.'
      }
    }
  ];

  modales = [
  {
    id: 'artixan',
    contenido: {
      titulo: 'Nuestro compromiso con los Objetivos de Desarrollo Sostenible - Artixan',
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
      descripcion: 'Círculo VAM fortalece los vínculos con los clientes mediante eventos interactivos y el uso de tecnología para compartir conocimiento y soluciones financieras.',
      impacto: 'Contribuye a la educación (ODS 4), la igualdad de género (ODS 5) y oportunidades económicas (ODS 8) a través de capacitación, inclusión y actividades que impulsan la innovación y colaboración.',
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
      titulo: 'Útiles Escolares',
      descripcion: 'Los programas de útiles escolares facilitan la educación de calidad y promueven la igualdad de género, apoyando especialmente a mujeres y niñas.',
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
  }
];


  // modales = [
  // {
  //   id: 'artixan',
  //   contenido: {
  //     titulo: 'Nuestro compromiso con los Objetivos de Desarrollo Sostenible - Artixan',
  //     descripcion: 'Artixan fomenta el empleo digno y el crecimiento económico de artesanos locales, al tiempo que preserva la riqueza cultural de México.',
  //     impacto: 'Con ello, contribuye al ODS 8 y al ODS 11, fortaleciendo la identidad cultural y generando oportunidades económicas sostenibles.',
  //     lista: [
  //       { texto: 'ODS 8: Trabajo decente y crecimiento económico', enlace: 'https://www.un.org/sustainabledevelopment/es/economic-growth/' },
  //       { texto: 'ODS 11: Ciudades y comunidades sostenibles', enlace: 'https://www.un.org/sustainabledevelopment/es/cities/' }
  //     ],
  //     enlace: 'https://artixan.com.mx/'
  //   }
  // },
  // {
  //   id: 'atencion-personalizada',
  //   contenido: {
  //     titulo: 'Atención Personalizada',
  //     descripcion: 'La atención personalizada acerca los servicios financieros a quienes más los necesitan, promoviendo la inclusión y reduciendo desigualdades.',
  //     impacto: 'Esta iniciativa se vincula con el ODS 1 y el ODS 10, al facilitar el acceso a soluciones financieras de manera cercana y confiable.',
  //     lista: [
  //       { texto: 'ODS 1: Fin de la pobreza', enlace: 'https://www.un.org/sustainabledevelopment/es/poverty/' },
  //       { texto: 'ODS 10: Reducción de desigualdades', enlace: 'https://www.un.org/sustainabledevelopment/es/inequality/' }
  //     ],
  //     enlace: 'https://artixan.com.mx/'
  //   }
  // },
  // {
  //   id: 'inclusion',
  //   contenido: {
  //     titulo: 'Inclusión Financiera',
  //     descripcion: 'Al ofrecer servicios financieros accesibles para grupos e individuos, Vamos a Mejorar impulsa la igualdad de oportunidades económicas y fomenta comunidades más resilientes.',
  //     impacto: 'Esta labor está alineada con el ODS 8, el ODS 10 y el ODS 5, especialmente cuando se enfoca en el empoderamiento de mujeres.',
  //     lista: [
  //       { texto: 'ODS 8: Trabajo decente y crecimiento económico', enlace: 'https://www.un.org/sustainabledevelopment/es/economic-growth/' },
  //       { texto: 'ODS 5: Igualdad de género', enlace: 'https://www.un.org/sustainabledevelopment/es/gender-equality/' },
  //       { texto: 'ODS 10: Reducción de desigualdades', enlace: 'https://www.un.org/sustainabledevelopment/es/inequality/' }
  //     ],
  //     enlace: ''
  //   }
  // },
  // {
  //   id: 'despensas',
  //   contenido: {
  //     titulo: 'Apoyo de Despensas',
  //     descripcion: 'El programa de despensas garantiza el acceso a alimentos esenciales, promoviendo la seguridad alimentaria y el bienestar de las familias.',
  //     impacto: 'Esto contribuye directamente al ODS 2 y al ODS 3, apoyando comunidades más saludables y resilientes.',
  //     lista: [
  //       { texto: 'ODS 2: Hambre cero', enlace: 'https://www.un.org/sustainabledevelopment/es/hunger/' },
  //       { texto: 'ODS 3: Salud y bienestar', enlace: 'https://www.un.org/sustainabledevelopment/es/health/' }
  //     ],
  //     enlace: ''
  //   }
  // },
  // {
  //   id: 'circulo-vam',
  //   contenido: {
  //     titulo: 'Círculo VAM',
  //     descripcion: 'Círculo VAM fortalece los vínculos con los clientes mediante eventos interactivos y el uso de tecnología para compartir conocimiento y soluciones financieras.',
  //     impacto: 'Esta iniciativa se relaciona con el ODS 9 y el ODS 17, fomentando la innovación, la colaboración y el desarrollo comunitario.',
  //     lista: [
  //       { texto: 'ODS 9: Industria, innovación e infraestructura', enlace: 'https://www.un.org/sustainabledevelopment/es/infrastructure/' },
  //       { texto: 'ODS 17: Alianzas para lograr los objetivos', enlace: 'https://www.un.org/sustainabledevelopment/es/globalpartnerships/' }
  //     ],
  //     enlace: ''
  //   }
  // },
  // {
  //   id: 'utiles',
  //   contenido: {
  //     titulo: 'Útiles Escolares',
  //     descripcion: 'Los programas de útiles escolares facilitan la educación de calidad y promueven la igualdad de género, apoyando especialmente a mujeres y niñas.',
  //     impacto: 'Esto se vincula con el ODS 4 y el ODS 5, además de contribuir al ODS 10 al ofrecer oportunidades equitativas en la educación.',
  //     lista: [
  //       { texto: 'ODS 4: Educación de calidad', enlace: 'https://www.un.org/sustainabledevelopment/es/education/' },
  //       { texto: 'ODS 5: Igualdad de género', enlace: 'https://www.un.org/sustainabledevelopment/es/gender-equality/' },
  //       { texto: 'ODS 10: Reducción de desigualdades', enlace: 'https://www.un.org/sustainabledevelopment/es/inequality/' }
  //     ],
  //     enlace: ''
  //   }
  // }
  // ];



  
  // modales = [
  //   {
  //     id: 'artixan',
  //     contenido: {
  //       titulo: 'Nuestro compromiso con los Objetivos de Desarrollo Sostenible - Artixan ',
  //       descripcion: 'Artixan fomenta el empleo digno y el crecimiento económico de artesanos locales, al tiempo que preserva la riqueza cultural de México.',
  //       impacto: 'Con ello, contribuye al ODS 8 y al ODS 11, fortaleciendo la identidad cultural y generando oportunidades económicas sostenibles.',
  //       lista: [
  //         { texto: 'ODS 8: Trabajo decente y crecimiento económico', enlace: 'https://artixan.com.mx' },
  //         { texto: 'ODS 11: Ciudades y comunidades sostenibles', enlace: 'https://www.un.org/sustainabledevelopment/es/cities/' }
  //       ],
  //       enlace: 'https://artixan.com.mx/'
  //     }
  //   },
  //   {
  //     id: 'atencion-personalizada',
  //     contenido: {
  //       titulo: 'Atención Personalizada',
  //       descripcion: 'La atención personalizada acerca los servicios financieros a quienes más los necesitan, promoviendo la inclusión y reduciendo desigualdades.',
  //       impacto: 'Esta iniciativa se vincula con el ODS 1 y el ODS 10, al facilitar el acceso a soluciones financieras de manera cercana y confiable.',
  //       lista: [
  //         'ODS 1: Fin de la pobreza',
  //         'ODS 10: Reducción de desigualdades'
  //       ],
  //       enlace: 'https://artixan.com.mx/'
  //     }
  //   },
  //   {
  //     id: 'inclusion',
  //     contenido: {
  //       titulo: 'Inclución Financiera',
  //       descripcion: 'Al ofrecer servicios financieros accesibles para grupos e individuos, Vamos a Mejorar impulsa la igualdad de oportunidades económicas y fomenta comunidades más resilientes.',
  //       impacto: 'Esta labor está alineada con el ODS 8, el ODS 10 y el ODS 5 cuando se enfoca en el empoderamiento de mujeres.',
  //       lista: [
  //         'ODS 8: Trabajo decente y crecimiento económico',
  //         'ODS 5: Igualdad de género',
  //         'ODS 10: Reducción de desigualdades'
  //       ],
  //       enlace: ''
  //     }
  //   },
  //   {
  //     id: 'despensas',
  //     contenido: {
  //       titulo: 'Apoyo de Despensas',
  //       descripcion: 'El programa de despensas garantiza el acceso a alimentos esenciales, promoviendo la seguridad alimentaria y el bienestar de las familias.',
  //       impacto: 'Esto contribuye directamente al ODS 2 y al ODS 3, apoyando comunidades más saludables y resilientes.',
  //       lista: [
  //         'ODS 2: Hambre cero',
  //         'ODS 3: Salud y bienestar'
  //       ],
  //       enlace: ''
  //     }
  //   },
  //   {
  //     id: 'circulo-vam',
  //     contenido: {
  //       titulo: 'Círculo VAM',
  //       descripcion: 'Círculo VAM fortalece los vínculos con los clientes mediante eventos interactivos y el uso de tecnología para compartir conocimiento y soluciones financieras.',
  //       impacto: 'Esta iniciativa se relaciona con el ODS 9 y el ODS 17, fomentando colaboración, innovación y desarrollo comunitario.',
  //       lista: [
  //         'ODS 9: Industria, innovación e infraestructura',
  //         'ODS 17: Alianzas para lograr los objetivos'
  //       ],
  //       enlace: ''
  //     }
  //   },
  //   {
  //     id: 'utiles',
  //     contenido: {
  //       titulo: 'Útiles Escolares',
  //       descripcion: 'Los programas de útiles escolares facilitan la educación de calidad y promueven la igualdad de género, apoyando especialmente a mujeres y niñas.',
  //       impacto: 'Esto se vincula con el ODS 4 y el ODS 5, además de contribuir al ODS 10 al ofrecer oportunidades equitativas en la educación.',
  //       lista: [
  //         'ODS 4: Educación de calidad',
  //         'ODS 5: Igualdad de género',
  //         'ODS 10: Reducción de desigualdades'
  //       ],
  //       enlace: ''
  //     }
  //   }
  // ];

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