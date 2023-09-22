import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteresComponent } from './caracteres.component';

describe('CaracteresComponent', () => {
  let component: CaracteresComponent;
  let fixture: ComponentFixture<CaracteresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaracteresComponent]
    });
    fixture = TestBed.createComponent(CaracteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
