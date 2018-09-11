import { Component, OnInit } from '@angular/core';
import { FcmService } from '../services/fcm.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-fcm',
  templateUrl: './fcm.page.html',
  styleUrls: ['./fcm.page.scss']
})
export class FcmPage implements OnInit {
  constructor(public fcm: FcmService, private db: DbService) {}

  ngOnInit() {}

  getPermission() {
    this.fcm.getPermission().subscribe();
  }

  randomDiscount() {
    const random = Math.round(Math.random() * 100);

    const headline = `New discount for ${random}% off!!!`;

    this.db.updateAt('discounts', { headline });
  }
}
