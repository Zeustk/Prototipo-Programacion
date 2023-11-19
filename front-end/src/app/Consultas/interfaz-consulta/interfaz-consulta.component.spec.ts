import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfazConsultaComponent } from './interfaz-consulta.component';

describe('InterfazConsultaComponent', () => {
  let component: InterfazConsultaComponent;
  let fixture: ComponentFixture<InterfazConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfazConsultaComponent]
    });
    fixture = TestBed.createComponent(InterfazConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
