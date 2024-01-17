import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { TaskDetail } from './task-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TaskDetailService {
  url: string = environment.apiBaseUrl + '/TaskDetail';
  list: TaskDetail[] = [];
  formData: TaskDetail = new TaskDetail();
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) {}

  refreshList() {
    this.http.get(this.url).subscribe({
      next: (res) => {
        this.list = res as TaskDetail[];
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  postTaskDetail() {
    return this.http.post(this.url, this.formData);
  }

  putTaskDetail() {
    return this.http.put(
      this.url + '/' + this.formData.taskDetailId,
      this.formData
    );
  }

  deleteTaskDetail(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.formData = new TaskDetail();
    this.formSubmitted = false;
  }
}
