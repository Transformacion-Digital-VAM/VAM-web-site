import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostosComisionesComponent } from './costos-comisiones.component';

describe('CostosComisionesComponent', () => {
  let component: CostosComisionesComponent;
  let fixture: ComponentFixture<CostosComisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostosComisionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostosComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
