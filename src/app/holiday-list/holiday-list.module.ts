import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HolidayListPageRoutingModule } from './holiday-list-routing.module';
import { HolidayListPage } from './holiday-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HolidayListPageRoutingModule
  ],
  declarations: [HolidayListPage]
})
export class HolidayListPageModule {}
