import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-button-credimpact',
  standalone: false,
  templateUrl: './button-credimpact.component.html',
  styleUrl: './button-credimpact.component.css'
})
export class ButtonCredimpactComponent implements OnInit, OnDestroy {
  public showButton = true;
  private mobileBreakpoint = 768; // px
  private routerSubscription: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkVisibility();
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkVisibility(event.urlAfterRedirects || event.url);
      }
    });
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize);
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize);
    }
  }

  @HostListener('window:resize')
  onResize = () => {
    this.checkVisibility();
  };

  private checkVisibility(url?: string) {
    const currentUrl = url || this.router.url;
    const isCredimpacto = currentUrl === '/credimpacto-vam';
    let isMobile = false;
    if (typeof window !== 'undefined') {
      isMobile = window.innerWidth < this.mobileBreakpoint;
    }
    this.showButton = !isCredimpacto && !isMobile;
  }
}
