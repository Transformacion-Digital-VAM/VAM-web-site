import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoIndividualComponent } from './credito-individual.component';

describe('CreditoIndividualComponent', () => {
  let component: CreditoIndividualComponent;
  let fixture: ComponentFixture<CreditoIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditoIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
