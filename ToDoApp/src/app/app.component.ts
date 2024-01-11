import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// FALTA EL COSO DE TOAST
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    TaskDetailsComponent,
    HttpClientModule,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'ToDoApp';
}
