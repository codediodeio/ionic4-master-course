import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireFunctions } from '@angular/fire/functions';
import { DbService } from '../services/db.service';
import { ToastController } from '@ionic/angular';
import { tap } from 'rxjs/operators';

import * as app from 'firebase';

const _messaging = app.messaging();
_messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
_messaging.onMessage = _messaging.onMessage.bind(_messaging);

@Component({
  selector: 'app-fcm',
  templateUrl: './fcm.page.html',
  styleUrls: ['./fcm.page.scss']
})
export class FcmPage implements OnInit {
  token;
  constructor(
    private fcm: AngularFireMessaging,
    private fun: AngularFireFunctions,
    private db: DbService,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.fcm.messages
      .pipe(
        tap(msg => {
          const body: any = (msg as any).notification.body;
          this.showToast(body);
        })
      )
      .subscribe();
  }

  async showToast(message) {
    const toast = await this.toast.create({
      message,
      duration: 5000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'dismiss'
    });
    toast.present();
  }

  getPermission() {
    this.fcm.requestToken.subscribe(token => {
      this.token = token;
      console.log({ token });
    });
  }

  sub(topic) {
    this.fun
      .httpsCallable('subscribeToTopic')({ topic, token: this.token })
      .pipe(tap(_ => this.showToast(`subscribed to ${topic}`)))
      .subscribe();
  }

  unsub(topic) {
    this.fun
      .httpsCallable('unsubscribeFromTopic')({ topic, token: this.token })
      .pipe(tap(_ => this.showToast(`unsubscribed from ${topic}`)))
      .subscribe();
  }

  randomDiscount() {
    const random = Math.round(Math.random() * 100);

    const headline = `New discount for ${random}% off!!!`;

    setTimeout(() => this.db.updateAt('discounts', { headline }), 1000);
  }
}
