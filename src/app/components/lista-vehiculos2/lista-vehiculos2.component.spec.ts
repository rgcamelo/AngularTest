import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVehiculos2Component } from './lista-vehiculos2.component';

describe('ListaVehiculos2Component', () => {
  let component: ListaVehiculos2Component;
  let fixture: ComponentFixture<ListaVehiculos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVehiculos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVehiculos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
