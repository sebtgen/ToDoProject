import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDetailFormComponent } from './task-detail-form.component';

describe('TaskDetailFormComponent', () => {
  let component: TaskDetailFormComponent;
  let fixture: ComponentFixture<TaskDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDetailFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
