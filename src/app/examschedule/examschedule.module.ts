import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamschedulePageRoutingModule } from './examschedule-routing.module';

import { ExamschedulePage } from './examschedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamschedulePageRoutingModule
  ],
  declarations: [ExamschedulePage]
})
export class ExamschedulePageModule {}
