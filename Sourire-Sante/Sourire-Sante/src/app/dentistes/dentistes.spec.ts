import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dentistes } from './dentistes';

describe('Dentistes', () => {
  let component: Dentistes;
  let fixture: ComponentFixture<Dentistes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dentistes],
    }).compileComponents();

    fixture = TestBed.createComponent(Dentistes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
