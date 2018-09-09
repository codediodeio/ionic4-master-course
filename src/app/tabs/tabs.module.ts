import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { TodoPageModule } from '../todo/todo.module';
import { PhotosPageModule } from '../photos/photos.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    TodoPageModule,
    PhotosPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
