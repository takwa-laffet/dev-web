import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposant } from './mon-composant';

describe('MonComposant', () => {
  let component: MonComposant;
  let fixture: ComponentFixture<MonComposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonComposant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonComposant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
