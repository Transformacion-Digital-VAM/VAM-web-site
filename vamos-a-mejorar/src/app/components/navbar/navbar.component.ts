// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: false,
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css'
// })
// export class NavbarComponent {
  
// } 
import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    // Solo ejecutar en navegador
    if (!isPlatformBrowser(this.platformId)) return;

    // --- Toggle submenús al hacer clic ---
    const submenuToggles = document.querySelectorAll('.dropdown-submenu > a.dropdown-toggle');

    submenuToggles.forEach(toggle => {
      toggle.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();

        const parent = toggle.parentElement!;
        parent.classList.toggle('show');

        // Cierra otros submenús hermanos
        parent.parentElement!.querySelectorAll('.dropdown-submenu').forEach(sibling => {
          if (sibling !== parent) sibling.classList.remove('show');
        });
      });
    });

    // --- Cerrar navbar colapsado al hacer clic en un link (solo si NO es dropdown principal) ---
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Ignorar links que abren submenús
        if (link.classList.contains('dropdown-toggle')) return;

        if (navbarCollapse!.classList.contains('show')) {
          new (window as any).bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });

    // --- Cierra submenús al cerrar dropdown principal ---
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('hide.bs.dropdown', () => {
        const submenus = dropdown.querySelectorAll('.dropdown-submenu');
        submenus.forEach(sub => sub.classList.remove('show'));
      });
    });
  }
}
