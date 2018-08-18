import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private storage: Storage, private router: Router) {}

  async resetTutorial() {
    await this.storage.set('tutorialComplete', false);
    this.router.navigateByUrl('/tutorial');
  }
}
