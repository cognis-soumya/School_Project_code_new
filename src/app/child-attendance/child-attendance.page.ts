import { Component, OnInit, ViewChild} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { AttendanceDetails } from '../pojos/attendance_details';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-child-attendance',
  templateUrl: './child-attendance.page.html',
  styleUrls: ['./child-attendance.page.scss'],
})
export class ChildAttendancePage implements OnInit {

  attendanceArr: AttendanceDetails[] = [];
  localServicesService: LocalServicesService;
  // private dataExchangeService: DataExchangeService;
  data = '';
  error = '';
  childData: ChildData;
  childName: any;
  fromDate = '';
  toDate = '';
  totalPresent = 0;
  totalAbsent = 0;
  totalDay = 0;
  childDataArr: ChildData[] = [];
  childId: any;

  eventSource = [];
  viewTitle: string;
  date: any;
  type: any;

  constructor(private modalCtrl: ModalController,
              private router: Router,
              private http: HttpClient,
              private datePipe: DatePipe,
              private dataExchangeService: DataExchangeService) {
      this.data = '',
      this.error = '',
      this.localServicesService = new LocalServicesService(this.http);
  }

  ngOnInit() {
  }

  goBack(){
    history.back();
  }
  // This a method where are creating model
  ionViewWillEnter() {
    // this.childDataArr = this.dataExchangeService.getChildArr();
    this.childData = this.dataExchangeService.getChildData();
    this.childName = this.childData.getStudentName();
    this.childId = this.childData.getStudentId();
  }
  // Selecting child
  // selectChild(event){
  //   for(let i = 0; i < this.childDataArr.length; i++){
  //     if (event.target.value === this.childDataArr[i].getStudentName()){
  //         this.childId = this.childDataArr[i].getStudentId();
  //         break;
  //     }
  //   }
  // }
  // Getting Attendance deatils call
  async getAttendanceCall(){
    this.localServicesService.getAttendance(
      this.localServicesService.studentAttendance,
      this.childId,
      this.fromDate,
      this.toDate
    ).subscribe((resData: Response) => {
        let parsed = JSON.parse(JSON.stringify(resData));
        this.data = JSON.stringify(resData);
        console.log('Data', this.data);
        JSON.parse(this.data, (key, value) => {
          if (typeof key === 'string') {
            if (key === 'totalAttendaceList'){
                this.dataExchangeService.attendanceDetailsArr = [];
                 // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < parsed.totalAttendaceList.length; i++){
                  this.dataExchangeService.storeAttendanceDetails(new AttendanceDetails(
                    parsed.totalAttendaceList[i].attendenceStatus,
                    parsed.totalAttendaceList[i].date
                  ));
                }
                this.totalPresent = parsed.totalPresent;
                this.totalAbsent = parsed.totalAbsent;
                this.totalDay = parsed.totalDay;
                this.attendanceArr = this.dataExchangeService.getAttendanceDetails();
                console.log('Attendance', this.attendanceArr);
            }
          }
        });
    },
    err => {
      this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
    });
    console.log('error', this.error);
  }

  fromDateChange(fromDate){
    const dateFormat = fromDate.split('T')[0];
    this.fromDate = this.datePipe.transform(dateFormat, 'yyyy/MM/dd');
    console.log('from date', this.fromDate);
  }

  toDateChange(toDate){
    const dateFormat = toDate.split('T')[0];
    this.toDate = this.datePipe.transform(dateFormat, 'yyyy/MM/dd');
    console.log('to date', this.toDate);
    console.log('from Date', this.fromDate);
    console.log('Child Id', this.childId);
    this.getAttendanceCall();
  }
}
