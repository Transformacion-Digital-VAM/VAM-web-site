import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresolicitudCreditoComponent } from './presolicitud-credito.component';

describe('PresolicitudCreditoComponent', () => {
  let component: PresolicitudCreditoComponent;
  let fixture: ComponentFixture<PresolicitudCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresolicitudCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresolicitudCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
