import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  device;

  constructor() {}

  ngOnInit() {
    this.device = Device.getInfo();
  }
}
