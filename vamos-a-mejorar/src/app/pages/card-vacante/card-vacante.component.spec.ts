import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVacanteComponent } from './card-vacante.component';

describe('CardVacanteComponent', () => {
  let component: CardVacanteComponent;
  let fixture: ComponentFixture<CardVacanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardVacanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
