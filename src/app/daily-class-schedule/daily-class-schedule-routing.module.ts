import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyClassSchedulePage } from './daily-class-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: DailyClassSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyClassSchedulePageRoutingModule {}
