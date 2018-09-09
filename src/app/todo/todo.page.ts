import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { DbService } from '../services/db.service';

import { ModalController } from '@ionic/angular';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { AuthService } from '../services/auth.service';

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
    private db: DbService,
    public modal: ModalController,
    private auth: AuthService
  ) {}

  async ngOnInit() {
    // this.todos = this.ref.valueChanges();

    const uid = await this.auth.uid();

    console.log(23, uid);

    this.todos = this.db.collection$('todos', ref =>
      ref
        .where('uid', '==', uid)
        .orderBy('createdAt', 'desc')
        .limit(25)
    );

    this.filtered = this.filter.pipe(
      switchMap(filter => {
        return this.todos.pipe(
          map(arr => filterByStatus(arr as any[], filter))
        );
      })
    );

    this.todos.subscribe(console.log);
  }

  updateStatus(id, status) {
    this.db.updateAt(`todos/${id}`, { status });
  }

  toggleStatus(todo) {
    const status = todo.status === 'complete' ? 'pending' : 'complete';
    this.db.updateAt(`todos/${todo.id}`, { status });
  }

  updateFilter(val) {
    this.filter.next(val);
  }

  async presentModal(todo?: any) {
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

const filterByStatus = (arr: any[], status: string) =>
  arr.filter(obj => (status ? obj.status === status : true));
