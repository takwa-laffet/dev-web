import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposant2 } from './mon-composant2';

describe('MonComposant2', () => {
  let component: MonComposant2;
  let fixture: ComponentFixture<MonComposant2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonComposant2],
    }).compileComponents();

    fixture = TestBed.createComponent(MonComposant2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
