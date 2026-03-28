import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Composont3 } from './composont3';

describe('Composont3', () => {
  let component: Composont3;
  let fixture: ComponentFixture<Composont3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Composont3],
    }).compileComponents();

    fixture = TestBed.createComponent(Composont3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
