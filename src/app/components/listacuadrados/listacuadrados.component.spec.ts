import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacuadradosComponent } from './listacuadrados.component';

describe('ListacuadradosComponent', () => {
  let component: ListacuadradosComponent;
  let fixture: ComponentFixture<ListacuadradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacuadradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacuadradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
