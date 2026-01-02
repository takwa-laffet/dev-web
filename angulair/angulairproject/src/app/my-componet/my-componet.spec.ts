import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponet } from './my-componet';

describe('MyComponet', () => {
  let component: MyComponet;
  let fixture: ComponentFixture<MyComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
