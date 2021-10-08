import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalistaComponent } from './listalista.component';

describe('ListalistaComponent', () => {
  let component: ListalistaComponent;
  let fixture: ComponentFixture<ListalistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListalistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
