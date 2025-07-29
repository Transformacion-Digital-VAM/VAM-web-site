import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadEspecializadaComponent } from './unidad-especializada.component';

describe('UnidadEspecializadaComponent', () => {
  let component: UnidadEspecializadaComponent;
  let fixture: ComponentFixture<UnidadEspecializadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnidadEspecializadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnidadEspecializadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
