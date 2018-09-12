import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { DbService } from '../../services/db.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  constructor(
    private db: DbService,
    private auth: AuthService,
    public modal: ModalController,
    private fb: FormBuilder // private params: NavParams
  ) {}

  todoForm: FormGroup;

  todo;

  ngOnInit() {
    const data = {
      content: '',
      status: 'pending',
      ...this.todo
    };
    this.todoForm = this.fb.group({
      content: [
        data.content,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250)
        ]
      ],
      status: [data.status, [Validators.required]]
    });
  }

  async createTodo() {
    const uid = await this.auth.uid();
    const id = this.todo ? this.todo.id : '';
    const data = {
      uid,
      createdAt: Date.now(),
      ...this.todo,
      ...this.todoForm.value
    };

    this.db.updateAt(`todos/${id}`, data);
    this.modal.dismiss();
  }
}
