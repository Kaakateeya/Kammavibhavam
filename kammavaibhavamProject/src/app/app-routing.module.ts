import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'commonfooter',
    loadChildren: './commonfooter/commonfooter.module#CommonfooterModule'
  },
  {
    path: 'aboutus',
    loadChildren: './aboutus/aboutus.module#AboutusModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
