import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonmenuRoutingModule } from './commonmenu-routing.module';
import { CommonmenuComponent } from './commonmenu/commonmenu.component';

@NgModule({
  imports: [
    CommonModule,
    CommonmenuRoutingModule
  ],
  declarations: [CommonmenuComponent]
})
export class CommonmenuModule { }
