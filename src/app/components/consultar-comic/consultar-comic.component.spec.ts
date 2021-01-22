import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarComicComponent } from './consultar-comic.component';

describe('ConsultarComicComponent', () => {
  let component: ConsultarComicComponent;
  let fixture: ComponentFixture<ConsultarComicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarComicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
