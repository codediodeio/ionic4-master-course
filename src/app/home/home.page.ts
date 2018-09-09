import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  device;
  constructor(
    private storage: Storage,
    private router: Router,
    public auth: AuthService
  ) {
    this.device = Device.getInfo();
  }

  async resetTutorial() {
    await this.storage.set('tutorialComplete', false);
    this.router.navigateByUrl('/tutorial');
  }
}
