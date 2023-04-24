import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { DataExchangeService } from '../providers/data-exchange.service';
import { HolidayData } from '../pojos/holiday_data';
import { SchoolData } from '../pojos/school_details';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.page.html',
  styleUrls: ['./holiday-list.page.scss'],
})
export class HolidayListPage implements OnInit {

  eventSource = [];
  viewTitle: string;
  data: string;
  error: string;
  fromDate = '';
  todate = '';
  hasHoliday = 0;
  totalNoOfHoliday = 0;
  holidayDataArr: HolidayData[] = [];
  localServicesService: LocalServicesService;
  dataExchangeService: DataExchangeService;
  schoolData: SchoolData;
  maxDate: any;
  minDate: any;

  constructor(private modalCtrl: ModalController,
              private alertCtrl: AlertController,
              private datePipe: DatePipe,
              public loadingControler: LoadingController,
              private http: HttpClient) {

      this.data = '';
      this.error = '';
      this.localServicesService = new LocalServicesService(this.http);
      this.dataExchangeService = new DataExchangeService();
      this.minDate = (new Date()).getFullYear();
      this.maxDate = (new Date()).getFullYear() + 3;
}
  ngOnInit() {
  }

  goBack() {
    history.back();
  }
  onViewTitleChanged(title){
     this.viewTitle = title;
  }

   // For from date
   fromDateChange(fromDate){
     const dateFormat = fromDate.split('T')[0];
     this.fromDate = this.datePipe.transform(dateFormat, 'yyyy/MM/dd');
     console.log('from date', this.fromDate.toString().split('/').reverse().join('-'));
   }
   // For To date
   toDateChange(todate){
    const dateFormat = todate.split('T')[0];
    this.todate = this.datePipe.transform(dateFormat, 'yyyy/MM/dd');
    console.log('to date', this.todate.toString().split('/').reverse().join('-'));
   }

   // to generate holiday list
   async showHoliday(){
    const loading = await this.loadingControler.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
      this.schoolData = this.dataExchangeService.getSchoolData();
      // console.log('schoolData', this.schoolData);
      this.localServicesService.getHoliday(
        this.localServicesService.holidayListURL,
        this.fromDate.toString().split('/').reverse().join('-'),
        this.todate.toString().split('/').reverse().join('-'),
        1 // this.schoolData.getSchoolId()
      ).subscribe(
        (resData: Response) => {
          let parsed = JSON.parse(JSON.stringify(resData));
          // parsed.childList
          this.data = JSON.stringify(resData);
          console.log('Data', this.data);
          // console.log('childInfo', parsed.childList);
          JSON.parse(this.data, async (key, value) => {
            if (typeof key === 'string'){
              // console.log('Userdata : ', key);
              if (key.toString() === 'holidayList'){
                  this.dataExchangeService.holidayArr = [];
                  // tslint:disable-next-line: prefer-for-of
                  for (let i = 0; i < parsed.holidayList.length; i++){
                      this.dataExchangeService.storeHolidayList(new HolidayData(
                         parsed.holidayList[i].holidayId,
                         parsed.holidayList[i].nameOfHoliday,
                         parsed.holidayList[i].fromDate,
                         parsed.holidayList[i].toDate
                      ));
                  }
                  this.holidayDataArr =  this.dataExchangeService.getHolidayList();
                  this.totalNoOfHoliday = this.holidayDataArr.length;
                  await loading.onDidDismiss();
              }
            }
          });
          console.log('holiday data', this.holidayDataArr);
        },
        async err => {
          await loading.onDidDismiss();
          this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
        }
      );
   }
}
