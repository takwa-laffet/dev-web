import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksComponet } from './tasks-componet';

describe('TasksComponet', () => {
  let component: TasksComponet;
  let fixture: ComponentFixture<TasksComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(TasksComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
