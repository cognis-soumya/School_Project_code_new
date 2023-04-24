import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildListPage } from './child-list.page';

const routes: Routes = [
  {
    path: '',
    component: ChildListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChildListPageRoutingModule {}
