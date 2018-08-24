import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { BehaviorSubject } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { DbService } from '../services/db.service';

import { ModalController } from '@ionic/angular';
import { TodoFormComponent } from './todo-form/todo-form.component';

import { VirtualScroll } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage implements OnInit {
  todos;
  filtered;

  filter = new BehaviorSubject(null);

  constructor(private db: DbService, public modal: ModalController) {}

  ngOnInit() {
    // this.todos = this.ref.valueChanges();

    this.todos = this.db.collection$('todos', ref =>
      ref
        .where('user', '==', 'jeff')
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
  }

  updateStatus(id, status) {
    this.db.updateAt(`todos/${id}`, { status });
  }

  updateFilter(val) {
    this.filter.next(val);
  }

  async presentModal() {
    const modal = await this.modal.create({
      component: TodoFormComponent
    });
    return await modal.present();
  }

  trackById(idx, todo) {
    return todo.id;
  }
}

const filterByStatus = (arr: any[], status: string) =>
  arr.filter(obj => (status ? obj.status === status : true));
