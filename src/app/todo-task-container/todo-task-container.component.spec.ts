import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskContainerComponent } from './todo-task-container.component';

describe('TodoTaskContainerComponent', () => {
  let component: TodoTaskContainerComponent;
  let fixture: ComponentFixture<TodoTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTaskContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
