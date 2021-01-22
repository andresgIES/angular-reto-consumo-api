import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarSeriesComponent } from './consultar-series.component';

describe('ConsultarSeriesComponent', () => {
  let component: ConsultarSeriesComponent;
  let fixture: ComponentFixture<ConsultarSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
