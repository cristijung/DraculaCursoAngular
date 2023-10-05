import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFilmesComponent } from './consulta-filmes.component';

describe('ConsultaFilmesComponent', () => {
  let component: ConsultaFilmesComponent;
  let fixture: ComponentFixture<ConsultaFilmesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaFilmesComponent]
    });
    fixture = TestBed.createComponent(ConsultaFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
