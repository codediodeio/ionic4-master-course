import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuard } from './guards/tutorial.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [TutorialGuard]
  },
  {
    path: 'todo',
    loadChildren: './todo/todo.module#TodoPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'tutorial',
    loadChildren: './tutorial/tutorial.module#TutorialPageModule'
  },
  { path: 'fcm', loadChildren: './fcm/fcm.module#FcmPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
