import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildListPageRoutingModule } from './child-list-routing.module';

import { ChildListPage } from './child-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildListPageRoutingModule
  ],
  declarations: [ChildListPage]
})
export class ChildListPageModule {}
