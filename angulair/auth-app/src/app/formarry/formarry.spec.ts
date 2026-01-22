import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formarry } from './formarry';

describe('Formarry', () => {
  let component: Formarry;
  let fixture: ComponentFixture<Formarry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formarry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formarry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
