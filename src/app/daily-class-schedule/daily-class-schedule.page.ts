import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { DailyClass } from '../pojos/daily_class';
import { SchoolData } from '../pojos/school_details';

@Component({
  selector: 'app-daily-class-schedule',
  templateUrl: './daily-class-schedule.page.html',
  styleUrls: ['./daily-class-schedule.page.scss'],
})
export class DailyClassSchedulePage implements OnInit {
  classes = [];
  // private classChanged = new Subject<[]>();
  childDataArr: ChildData[] = [];
  localServicesService: LocalServicesService;
  dailyClassArr: DailyClass[] = [];
  error: any;
  data: any;
  dayName = '';
  dayId = '1';
  childName: any;
  childId = '1';
  schooData: SchoolData;
  childData: ChildData;
  schoolId: any;
  dayList = [
    {
      dayId: '1',
      dayName: 'Monday'
    },
    {
      dayId: '2',
      dayName: 'Tuesday'
    },
    {
      dayId: '3',
      dayName: 'Wednesday'
    },
    {
      dayId: '4',
      dayName: 'Thusrday'
    },
    {
      dayId: '5',
      dayName: 'Friday'
    },
    {
      dayId: '6',
      dayName: 'Saturday'
    }
  ];
  tableStyle = 'bootstrap';

  constructor(
    private router: Router,
    private http: HttpClient,
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
   ionViewWillEnter() {
     this.childData = this.dataExchangeService.getChildData();
     this.childName = this.childData.getStudentName();
     this.childId = this.childData.getStudentId();
     this.childDataArr = [];
     this.schooData = this.dataExchangeService.getSchoolData();
     this.schoolId = this.schooData.getSchoolId();
     
    //  this.childDataArr = this.dataExchangeService.getChildArr();
     console.log('childInfo', this.childDataArr);
  }

  
  async selectDay(event: any){
    this.dayName = event.target.value;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.dayList.length; i++){
      if (this.dayName === this.dayList[i].dayName){
        this.dayId = this.dayList[i].dayId;
        break;
      }
    }
    this.localServicesService.getDailyClasses(
      this.localServicesService.dailyClassSchedule,
      this.childId,
      this.schoolId,
      this.dayId).subscribe(
        (resData: Response) => {
         let parsed = JSON.parse(JSON.stringify(resData));
         // parsed.childList
         this.data = JSON.stringify(resData);
         JSON.parse(this.data, (key, value) => {
           if (typeof key === 'string'){
             if (key.toString() === 'dailyClassScedule'){
               this.dataExchangeService.dailyClassArr = [];
               // tslint:disable-next-line: prefer-for-of
               for (let i = 0; i < parsed.dailyClassScedule.length; i++){
                 this.dataExchangeService.stroreDailyClass(new DailyClass(
                   parsed.dailyClassScedule[i].day,
                   parsed.dailyClassScedule[i].subjectId,
                   parsed.dailyClassScedule[i].subjectName,
                   parsed.dailyClassScedule[i].teacherName,
                   parsed.dailyClassScedule[i].startTime,
                   parsed.dailyClassScedule[i].endTime
                 ));
               }
               this.dailyClassArr = [];
               this.dailyClassArr = this.dataExchangeService.getDailyClasses();
             }
           }
         });
      },
      err => {
        this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
      });
  }

}
