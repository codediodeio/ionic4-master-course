import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../shared/login/login.component';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './profile/profile.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [LoginComponent, ProfileComponent, DeviceComponent],
  exports: [LoginComponent, ProfileComponent, DeviceComponent]
})
export class SharedModule {}
