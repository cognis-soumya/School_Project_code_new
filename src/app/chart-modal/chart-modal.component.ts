import { Component, OnInit, ViewChild} from '@angular/core';
import { IonContent, ModalController } from '@ionic/angular';
import { DataExchangeService } from '../providers/data-exchange.service';
import { MessageAdmin } from '../pojos/admin_message';

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html',
  styleUrls: ['./chart-modal.component.scss'],
})
export class ChartModalComponent  {

  message: MessageAdmin;

  @ViewChild(IonContent) content: IonContent;

  constructor(
    private moddalCtrl: ModalController,
    private dataExchangeService: DataExchangeService
    ) {
      this.message = this.dataExchangeService.getMesage();
     }

  goBack(){
    history.back();
  }
  
  dismissModal(){
    this.moddalCtrl.dismiss(null, 'cancel');
  }

}
