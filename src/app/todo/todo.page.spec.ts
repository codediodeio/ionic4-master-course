import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPage } from './todo.page';

describe('TodoPage', () => {
  let component: TodoPage;
  let fixture: ComponentFixture<TodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
