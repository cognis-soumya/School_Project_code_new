import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { LocalServicesService } from '../providers/local-services.service';
import { HttpClient } from '@angular/common/http';
import { TypeOfLeave } from '../pojos/type_of_leave';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.page.html',
  styleUrls: ['./leaves.page.scss'],
})
export class LeavesPage implements OnInit {

  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  childDataArr: ChildData[] = [];
  childDumyId = 0;
  childName: any;
  childData: ChildData;
  data: string;
  error: string;
  localServicesService: LocalServicesService;
  // private dataExchangeService: DataExchangeService;
  typeOfLeaveArr: TypeOfLeave[] = [];
  childDumyArr = ['subham'];
  leaveStatus = 'No';
  studentId: any;
  typeOfLeaveId: any;
  leaveReason: any;
  fromDate: any;
  toDate: any;
  type: string;

  constructor(
    private alertCtrl: AlertController,
    private http: HttpClient,
    private dataExchangeService: DataExchangeService,
    private router: Router,
    private datePipe: DatePipe
    ) {
    this.data = '';
    this.error = '';
    // this.dataExchangeService = new DataExchangeService();
    this.localServicesService = new LocalServicesService(http);
    this.childDataArr = this.dataExchangeService.getChildArr();

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }
  ngOnInit() {
  }
   // This a method where are creating model
   ionViewWillEnter() {
     this.childData = this.dataExchangeService.getChildData();
     this.childName = this.childData.getStudentName();
     this.childDumyId = this.childData.getStudentId();
    //  this.childDataArr = this.dataExchangeService.getChildArr();
     this.localServicesService.getTypesOfLeaves(
      this.localServicesService.typesOfLeave,
      1
      ).subscribe((resdata: Response) => {
        let parsed = JSON.parse(JSON.stringify(resdata));
        // parsed.childList
        this.data = JSON.stringify(resdata);
        JSON.parse(this.data ,  (key , value) => {
            if (typeof key === 'string'){
                if (key.toString() === 'type'){
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < parsed.type.length; i++){
                        this.dataExchangeService.storeTypeOfLeave(new TypeOfLeave(
                            parsed.type[i].typeOfLeavesId,
                            parsed.type[i].typeOfLeave
                        ));
                    }
                    this.typeOfLeaveArr = this.dataExchangeService.getTypeOfLeave();
                }
            }
            console.log('Type of list', this.typeOfLeaveArr);
            // if (this.typeOfLeaveArr.length > 0) {
            //  this.router.navigate(['/leave-history']);
            // }
        });
      },
      err => {
        this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
      }
      );
   }
  goBack() {
    history.back();
  }

z
  // For selecting child
  // async selectChild(event: any){

  //   console.log('data', this.dataExchangeService.getChildArr());
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < this.childDataArr.length; i++){
  //     if (this.childDataArr[i].getStudentName() === event.target.value){
  //       this.studentId = this.childDataArr[i].getStudentId();
  //       break;
  //    }else{
  //      console.log('Id not found !');
  //    }
  //   }
  // }

  // For Type of leave
  async selectTypeOfLeave(event: any){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.typeOfLeaveArr.length; i++){
        if (this.typeOfLeaveArr[i].getNameOfLeave() === event.target.value){
            this.typeOfLeaveId = this.typeOfLeaveArr[i].getTypeOfLeaveId();
            break;
        }
    }
  }

  // For from date
  fromDateChange(fromDate){
    const dateFormat = fromDate.split('T')[0];
    this.fromDate = this.datePipe.transform(dateFormat, 'yyyy-MM-dd');
    console.log('from date', this.fromDate);
  }

   // For To date
   toDateChange(todate){
    const dateFormat = todate.split('T')[0];
    this.toDate = this.datePipe.transform(dateFormat, 'yyyy-MM-dd');
    console.log('to date', this.toDate);
   }

  async showAlert(){
    console.log('TeacherId: ' + this.dataExchangeService.getTeacherData().getTeacherId()
                + 'ParentId: ' + DataExchangeService.constUserId
                + 'student ID :' + this.childData.getStudentId()
                + 'LeaveID: ' + this.typeOfLeaveId
                + 'startDate: ' + this.fromDate
                + 'endDate: ' + this.toDate
                + 'reason : ' + this.leaveReason);

    const body = {
      classTeacherId: this.dataExchangeService.getTeacherData().getTeacherId(),
      parentId: DataExchangeService.constUserId,
      studentId: this.childData.getStudentId(),
      typeOfLeavesId: this.typeOfLeaveId,
      startDate: this.fromDate,
      endDate: this.toDate,
      reason: this.leaveReason
    };
    this.localServicesService.saveLeaveApplication(
      this.localServicesService.leaveService,
      body).subscribe((resData: Response) => {
        this.data = JSON.stringify(resData);
        console.log('Leaves', this.data);
      });
    await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Submitted Successfully!',
      buttons: ['ok'],
    }).then(res => res.present());
    this.leaveStatus = 'Yes';
  }

  // History Page
  history(){
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/leave-history']);
  }
}
