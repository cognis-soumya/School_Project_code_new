import { Component, OnInit} from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { SchoolData } from '../pojos/school_details';
import { MessageAdmin } from '../pojos/admin_message';
import { ChartModalComponent } from '../chart-modal/chart-modal.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  localServicesService: LocalServicesService;
  error: any;
  data: any;
  childData: ChildData;
  messagesAdminArr: MessageAdmin[] = [];
  schoolData: SchoolData;
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private http: HttpClient,
    public loadingControler: LoadingController,
    private dataExchangeService: DataExchangeService) {
                this.data = '',
                this.error = '',
                this.localServicesService = new LocalServicesService(this.http);
    }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {}

  goBack() {
    history.back();
  }

  async ionViewWillEnter() {
    const loading = await this.loadingControler.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.schoolData = this.dataExchangeService.getSchoolData();
    this.localServicesService.getAdminMessages(
            this.localServicesService.messageFromAdmin,
            1
          ).subscribe((resData: Response) => {
            let parsed = JSON.parse(JSON.stringify(resData));
            // parsed.childList
            this.data = JSON.stringify(resData);
            JSON.parse(this.data, async (key, value) => {
              if (typeof key === 'string'){
                if (key.toString() === 'messageList'){
                    this.dataExchangeService.messageAdminArr = [];
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < parsed.messageList.length; i++){
                        this.dataExchangeService.storeAdminMessages(new MessageAdmin(
                           parsed.messageList[i].messageId,
                           parsed.messageList[i].messageSubject,
                           parsed.messageList[i].messageBody,
                           parsed.messageList[i].date,
                           parsed.messageList[i].createdby
                        ));
                    }
                    this.messagesAdminArr = [];
                    this.messagesAdminArr = this.dataExchangeService.getAdminMessages();
                    console.log('Admin Message', this.messagesAdminArr);
                    await loading.onDidDismiss();
                }
              }
            });
          },
            async err => {
              await loading.onDidDismiss();
              this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
            }
          );
  }
  async openModal(message) {
    this.dataExchangeService.setMessage(message);
    const modal = await this.modalCtrl.create({
      component: ChartModalComponent
    });
    await modal.present();
}

}
