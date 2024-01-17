import { Component, Output, EventEmitter } from '@angular/core';
import { TaskDetailService } from '../shared/task-detail.service';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskDetail } from '../shared/task-detail.model';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-task-detail-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-detail-form.component.html',
  styleUrl: './task-detail-form.component.css',
})
export class TaskDetailFormComponent {
  @Output() formSubmitted = new EventEmitter<void>();
  constructor(
    public service: TaskDetailService,
    private toast: HotToastService
  ) {}

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      if (this.service.formData.taskDetailId == 0) {
        this.insertRecord(form);
        this.service.refreshList();
      } else {
        this.updateRecord(form);
      }
      this.formSubmitted.emit();
    }
  }

  insertRecord(form: NgForm) {
    this.service.postTaskDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.service.refreshList();
        this.service.resetForm(form);
        this.toast.success('Successfully added task!');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  updateRecord(form: NgForm) {
    this.service.putTaskDetail().subscribe({
      next: (res) => {
        console.log(res);
        this.service.refreshList();
        this.service.list = res as TaskDetail[];
        this.service.resetForm(form);
        this.toast.info('Successfully edited task!');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
