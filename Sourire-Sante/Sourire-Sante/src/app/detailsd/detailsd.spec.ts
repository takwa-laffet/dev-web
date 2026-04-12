import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detailsd } from './detailsd';

describe('Detailsd', () => {
  let component: Detailsd;
  let fixture: ComponentFixture<Detailsd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detailsd],
    }).compileComponents();

    fixture = TestBed.createComponent(Detailsd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
