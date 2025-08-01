import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RouterModule } from '@angular/router';
import { ScrollSpyDirective } from './directivas/scroll-spy.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credito-grupal',
  standalone: true,
  imports: [RouterModule, ScrollSpyDirective, CommonModule],
  templateUrl: './credito-grupal.component.html',
  styleUrl: './credito-grupal.component.css',
    animations: [
    trigger('sidebarAnimation', [
      state('visible', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hidden', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('visible <=> hidden', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class CreditoGrupalComponent implements AfterViewInit {
  sidebarVisible = true;
  currentSection: string = '';

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
  }

  onSectionChange(sectionId: string) {
  this.currentSection = sectionId;
}

}
