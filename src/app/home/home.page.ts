import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  device;
  constructor() {}
}
