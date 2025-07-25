import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditoGrupalComponent } from './credito-grupal.component';

describe('CreditoGrupalComponent', () => {
  let component: CreditoGrupalComponent;
  let fixture: ComponentFixture<CreditoGrupalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreditoGrupalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditoGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
