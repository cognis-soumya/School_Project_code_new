import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedetailsPageRoutingModule } from './feedetails-routing.module';

import { FeedetailsPage } from './feedetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedetailsPageRoutingModule
  ],
  declarations: [FeedetailsPage]
})
export class FeedetailsPageModule {}
