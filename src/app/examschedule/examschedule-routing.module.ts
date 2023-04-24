import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamschedulePage } from './examschedule.page';

const routes: Routes = [
  {
    path: '',
    component: ExamschedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamschedulePageRoutingModule {}
