import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoesComponent } from './versoes.component';

describe('VersoesComponent', () => {
  let component: VersoesComponent;
  let fixture: ComponentFixture<VersoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersoesComponent]
    });
    fixture = TestBed.createComponent(VersoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
