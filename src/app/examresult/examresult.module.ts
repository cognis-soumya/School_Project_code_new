import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamresultPageRoutingModule } from './examresult-routing.module';

import { ExamresultPage } from './examresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamresultPageRoutingModule
  ],
  declarations: [ExamresultPage]
})
export class ExamresultPageModule {}
