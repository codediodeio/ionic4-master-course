import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TodoPage } from './todo.page';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [TodoPage, TodoItemComponent, TodoFormComponent],
  entryComponents: [TodoFormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoPageModule {}
