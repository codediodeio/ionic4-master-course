import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [TutorialGuard]
  },
  { path: 'todo', loadChildren: './todo/todo.module#TodoPageModule' },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  },
  { path: 'photos', loadChildren: './photos/photos.module#PhotosPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
