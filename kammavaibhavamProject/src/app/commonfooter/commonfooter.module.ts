import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonfooterRoutingModule } from './commonfooter-routing.module';
import { CommonfooterComponent } from './commonfooter/commonfooter.component';

@NgModule({
  imports: [
    CommonModule,
    CommonfooterRoutingModule
  ],
  declarations: [CommonfooterComponent]
})
export class CommonfooterModule { }
