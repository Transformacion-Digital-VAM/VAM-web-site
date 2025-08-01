import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorVirtualComponent } from './asesor-virtual.component';

describe('AsesorVirtualComponent', () => {
  let component: AsesorVirtualComponent;
  let fixture: ComponentFixture<AsesorVirtualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsesorVirtualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsesorVirtualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
