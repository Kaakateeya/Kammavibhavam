import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonfooterComponent } from './commonfooter/commonfooter.component';

const routes: Routes = [
  {
    path: '',
    component: CommonfooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonfooterRoutingModule { }
