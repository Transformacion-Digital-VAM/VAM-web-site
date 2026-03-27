import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCredimpactComponent } from './button-credimpact.component';

describe('ButtonCredimpactComponent', () => {
  let component: ButtonCredimpactComponent;
  let fixture: ComponentFixture<ButtonCredimpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonCredimpactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCredimpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
