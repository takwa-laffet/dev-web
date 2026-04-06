import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulair } from './formulair';

describe('Formulair', () => {
  let component: Formulair;
  let fixture: ComponentFixture<Formulair>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulair],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulair);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
