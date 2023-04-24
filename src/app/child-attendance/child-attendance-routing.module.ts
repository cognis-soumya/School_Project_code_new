import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildAttendancePage } from './child-attendance.page';

const routes: Routes = [
  {
    path: '',
    component: ChildAttendancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildAttendancePageRoutingModule {}
