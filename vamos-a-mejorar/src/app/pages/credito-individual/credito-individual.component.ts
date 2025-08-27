import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ScrollSpyDirective } from './directiva/scroll-spy.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credito-individual',
  standalone: true,
  imports: [ScrollSpyDirective, CommonModule, RouterModule],
  templateUrl: './credito-individual.component.html',
  styleUrl: './credito-individual.component.css',
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
export class CreditoIndividualComponent implements AfterViewInit {
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