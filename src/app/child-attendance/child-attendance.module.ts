import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildAttendancePageRoutingModule } from './child-attendance-routing.module';

import { ChildAttendancePage } from './child-attendance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildAttendancePageRoutingModule
  ],
  declarations: [ChildAttendancePage]
})
export class ChildAttendancePageModule {}
