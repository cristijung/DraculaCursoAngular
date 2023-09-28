import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCracteresComponent } from './img-cracteres.component';

describe('ImgCracteresComponent', () => {
  let component: ImgCracteresComponent;
  let fixture: ComponentFixture<ImgCracteresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgCracteresComponent]
    });
    fixture = TestBed.createComponent(ImgCracteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
