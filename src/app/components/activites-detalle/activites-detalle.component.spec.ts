import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesDetalleComponent } from './activites-detalle.component';

describe('ActivitesDetalleComponent', () => {
  let component: ActivitesDetalleComponent;
  let fixture: ComponentFixture<ActivitesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
