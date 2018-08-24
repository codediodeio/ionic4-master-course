import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo;

  constructor(private db: DbService) {}

  ngOnInit() {}

  updateStatus(id, status) {
    this.db.updateAt(`todos/${id}`, { status });
  }
}
