import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedetailsPage } from './feedetails.page';

const routes: Routes = [
  {
    path: '',
    component: FeedetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedetailsPageRoutingModule {}
