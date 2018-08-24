import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  constructor(
    private db: DbService,
    public modal: ModalController,
    private fb: FormBuilder
  ) {}

  todoForm: FormGroup;

  ngOnInit() {
    this.todoForm = this.fb.group({
      content: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250)
        ]
      ],
      status: ['pending', [Validators.required]]
    });
  }

  createTodo() {
    this.db.updateAt('todos', {
      ...this.todoForm.value,
      user: 'jeff',
      createdAt: Date.now()
    });

    this.modal.dismiss();
  }
}
