import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { DbService } from '../services/db.service';
import { AuthService } from '../services/auth.service';

import { ModalController } from '@ionic/angular';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { Observable } from 'rx';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {
  todos;
  filtered;

  filter = new BehaviorSubject(null);

  constructor(
    public db: DbService,
    public modal: ModalController,
    public auth: AuthService
  ) {}

  async ngOnInit() {
    const uid = await this.auth.uid();

    this.todos = this.db.collection$('todos', ref =>
      ref
        .where('uid', '==', uid)
        .orderBy('createdAt', 'desc')
        .limit(25)
    );

    this.filtered = this.filter.pipe(
      switchMap(filter => {
        return this.todos.pipe(
          map(arr =>
            (arr as any[]).filter(
              obj => (status ? obj.status === status : true)
            )
          )
        );
      })
    );
  }

  deleteTodo(todo) {
    this.db.delete(`todos/${todo.id}`);
  }

  toggleStatus(todo) {
    const status = todo.status === 'complete' ? 'pending' : 'complete';
    this.db.updateAt(`todos/${todo.id}`, { status });
  }

  updateFilter(val) {
    this.filter.next(val);
  }

  async presentTodoForm(todo?: any) {
    const modal = await this.modal.create({
      component: TodoFormComponent,
      componentProps: { todo }
    });
    return await modal.present();
  }

  trackById(idx, todo) {
    return todo.id;
  }
}
