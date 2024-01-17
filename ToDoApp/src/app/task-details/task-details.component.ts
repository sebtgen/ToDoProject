import { Component, OnInit } from '@angular/core';
import { TaskDetailFormComponent } from '../task-detail-form/task-detail-form.component';
import { TaskDetailService } from '../shared/task-detail.service';
import { CommonModule } from '@angular/common';
import { TaskDetail } from '../shared/task-detail.model';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-task-details',
  standalone: true,
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
  imports: [TaskDetailFormComponent, CommonModule],
})
export class TaskDetailsComponent implements OnInit {
  constructor(
    public service: TaskDetailService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: TaskDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.toggleForm(false);
  }

  onDelete(id: number) {
    this.service.deleteTaskDetail(id).subscribe({
      next: (res) => {
        console.log(res);
        this.service.refreshList();
        this.toast.error('Successfully deleted task!');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  showTaskDetailForm: boolean = false;
  showTaskList: boolean = true;

  toggleForm(newTask: boolean) {
    this.showTaskDetailForm = !this.showTaskDetailForm;
    this.showTaskList = !this.showTaskDetailForm;
    if (newTask) {
      this.service.formData = {
        taskDetailId: 0,
        taskDescription: '',
      };
    }
  }
}
