import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreloComponent } from './trelo.component';

describe('TreloComponent', () => {
  let component: TreloComponent;
  let fixture: ComponentFixture<TreloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
