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
    // this.params.get('todo');
    console.log(this.todo);
    // console.log(this.componentProps);
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

  async createTodo() {
    const uid = await this.auth.uid();
    console.log(uid);
    this.db.updateAt('todos', {
      ...this.todoForm.value,
      createdAt: Date.now(),
      uid
    });

    this.modal.dismiss();
  }
}
