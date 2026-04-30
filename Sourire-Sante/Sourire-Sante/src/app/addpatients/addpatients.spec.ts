import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addpatients } from './addpatients';

describe('Addpatients', () => {
  let component: Addpatients;
  let fixture: ComponentFixture<Addpatients>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addpatients],
    }).compileComponents();

    fixture = TestBed.createComponent(Addpatients);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
