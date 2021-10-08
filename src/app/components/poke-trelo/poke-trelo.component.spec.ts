import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTreloComponent } from './poke-trelo.component';

describe('PokeTreloComponent', () => {
  let component: PokeTreloComponent;
  let fixture: ComponentFixture<PokeTreloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTreloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTreloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
