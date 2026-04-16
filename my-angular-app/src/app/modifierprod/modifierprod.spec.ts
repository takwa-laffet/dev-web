import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modifierprod } from './modifierprod';

describe('Modifierprod', () => {
  let component: Modifierprod;
  let fixture: ComponentFixture<Modifierprod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modifierprod],
    }).compileComponents();

    fixture = TestBed.createComponent(Modifierprod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
