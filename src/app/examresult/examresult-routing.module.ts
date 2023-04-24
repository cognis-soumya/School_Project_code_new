import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamresultPage } from './examresult.page';

const routes: Routes = [
  {
    path: '',
    component: ExamresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamresultPageRoutingModule {}
