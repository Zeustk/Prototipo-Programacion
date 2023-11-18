import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoClienteComponent } from './tipo-cliente.component';

describe('TipoClienteComponent', () => {
  let component: TipoClienteComponent;
  let fixture: ComponentFixture<TipoClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoClienteComponent]
    });
    fixture = TestBed.createComponent(TipoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
