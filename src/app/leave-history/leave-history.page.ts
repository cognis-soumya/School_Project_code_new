import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { LeaveHistory } from '../pojos/leave_history';
import { Subject } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.page.html',
  styleUrls: ['./leave-history.page.scss'],
})
export class LeaveHistoryPage implements OnInit {
  childDataArr: ChildData[] = [];
  localServicesService: LocalServicesService;
  error: any;
  data: any;
  childData: ChildData;
  childName: any;
  leaveHistoryArr: LeaveHistory[] = [];
  leaveHistoryModified: LeaveHistory[] = [];
  leaveHistoryChanged = new Subject<LeaveHistory[]>();

  constructor(private router: Router,
    private http: HttpClient,
    public loadingControler: LoadingController,
    private dataExchangeService: DataExchangeService) {
this.data = '',
this.error = '',
this.localServicesService = new LocalServicesService(this.http);
}

ngOnInit() {
}

goBack() {
history.back();
}
// This a method where are creating model
  async ionViewWillEnter() {
this.childData = this.dataExchangeService.getChildData();
const loading = await this.loadingControler.create({
  cssClass: 'my-custom-class',
  message: 'Please wait...',
  duration: 2000
});
await loading.present();
this.localServicesService.getLeaveHistory(this.localServicesService.leaveHistory,
this.childData.getStudentId(),
DataExchangeService.constUserId).subscribe((resData: Response) => {
let parsed = JSON.parse(JSON.stringify(resData));
// parsed.childList
this.data = JSON.stringify(resData);
JSON.parse(this.data, async (key, value) => {
if (typeof key === 'string'){
    if (key.toString() === 'leaveList'){
      this.dataExchangeService.leaveHistoryArr = [];
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < parsed.leaveList.length; i++) {
        this.dataExchangeService.storeLeaveHistory(new LeaveHistory(
            parsed.leaveList[i].typeOfLeavesId,
            parsed.leaveList[i].startDate,
            parsed.leaveList[i].endDate,
            parsed.leaveList[i].totalDays,
            parsed.leaveList[i].reason,
            parsed.leaveList[i].typeOfLeave,
            parsed.leaveList[i].leaveStatus,
            parsed.leaveList[i].leaveId
        ));
      }
      this.leaveHistoryArr = [];
      this.leaveHistoryArr = this.dataExchangeService.getLeaveHistory();
      this.leaveHistoryModified = [];
      for (let k = 0; k < this.leaveHistoryArr.length; k++){
        if (this.leaveHistoryArr[k].getLeaveStatus() !== 'Done'){
          this.leaveHistoryArr[k].setLeaveStatus('Pending');
          this.leaveHistoryModified.push(this.leaveHistoryArr[k]);
          this.leaveHistoryChanged.next(this.leaveHistoryModified);
        }
      }
      console.log('leave History', this.leaveHistoryArr);
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
// for Applied
onlyApplied(){
this.leaveHistoryModified = [];
for (let i = 0; i < this.leaveHistoryArr.length; i++){
if (this.leaveHistoryArr[i].getLeaveStatus() !== 'Done'){
this.leaveHistoryModified.push(this.leaveHistoryArr[i]);
this.leaveHistoryChanged.next(this.leaveHistoryModified);
}
}
}
onlyCompleated(){
this.leaveHistoryModified = [];
// tslint:disable-next-line: prefer-for-of
for (let i = 0; i < this.leaveHistoryArr.length; i++) {
if (this.leaveHistoryArr[i].getLeaveStatus() === 'Done'){
this.leaveHistoryModified.push(this.leaveHistoryArr[i]);
this.leaveHistoryChanged.next(this.leaveHistoryModified);
}
}
}

/* const body = {
classTeacherId: this.dataExchangeService.getTeacherData().getTeacherId(),
parentId: DataExchangeService.constUserId,
studentId: this.studentId,
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
}); */

// Cancelling the leaves call
async cancelLeaveCall(leavePos){
var method = ['PUT', 'POST', 'GET', 'OPTION'];
var headers = new HttpHeaders();
headers.append('Accept', '*/*');
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', 'PUT');
headers.append('Access-Control-Allow-Methods', 'PUT');
const body = {
leaveId: 7,
leaveCancelRequest: 'N'
};
this.localServicesService.cancelLeave(
this.localServicesService.cancelLeaveUrl,
body,
headers).subscribe((resData: Response) => {
let parsed = JSON.parse(JSON.stringify(resData));
this.data = JSON.stringify(resData);
JSON.parse(this.data, (key, value) => {
// if (typeof key === 'string'){
  if (key.toString() === 'status'){
      status = value;
      if (status){
          console.log('Status', status);
      }
  }
// }
});
console.log('Data', this.data);
},
err => {
this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
}
);
}

}
