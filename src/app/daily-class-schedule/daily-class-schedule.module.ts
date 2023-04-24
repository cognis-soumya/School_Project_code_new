import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyClassSchedulePageRoutingModule } from './daily-class-schedule-routing.module';

import { DailyClassSchedulePage } from './daily-class-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyClassSchedulePageRoutingModule
  ],
  declarations: [DailyClassSchedulePage]
})
export class DailyClassSchedulePageModule {}
