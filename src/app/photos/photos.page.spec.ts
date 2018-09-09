import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosPage } from './photos.page';

describe('PhotosPage', () => {
  let component: PhotosPage;
  let fixture: ComponentFixture<PhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
