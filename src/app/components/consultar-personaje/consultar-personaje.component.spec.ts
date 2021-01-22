import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPersonajeComponent } from './consultar-personaje.component';

describe('ConsultarPersonajeComponent', () => {
  let component: ConsultarPersonajeComponent;
  let fixture: ComponentFixture<ConsultarPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
