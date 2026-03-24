import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrediImpactoVamComponent } from './credi-impacto-vam.component';

describe('CrediImpactoVamComponent', () => {
  let component: CrediImpactoVamComponent;
  let fixture: ComponentFixture<CrediImpactoVamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrediImpactoVamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrediImpactoVamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
