import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FcmPage } from './fcm.page';

describe('FcmPage', () => {
  let component: FcmPage;
  let fixture: ComponentFixture<FcmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FcmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FcmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
