import { Component, OnInit } from '@angular/core';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { SchoolData } from '../pojos/school_details';
import { LoadingController } from '@ionic/angular';
import { ExamSchedule } from '../model/exam_schedule';
import { ExamType } from '../pojos/exam_type';

@Component({
  selector: 'app-examschedule',
  templateUrl: './examschedule.page.html',
  styleUrls: ['./examschedule.page.scss'],
})
export class ExamschedulePage implements OnInit {
  childDataArr: ChildData[] = [];
  localServicesService: LocalServicesService;
  error: any;
  data: any;zzz
  examScheduleArr: ExamSchedule[] = [];
  examTypeArr: ExamType[] = [];
  examTypeId: any;
  childId: any;
  childName: any;
  schoolData: SchoolData;
  childData: ChildData;
  yearId: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    public loadingControler: LoadingController,
    private dataExchangeService: DataExchangeService){
      this.data = '',
      this.error = '',
      this.localServicesService = new LocalServicesService(this.http);
      
    }

    years = [
      {
        noOfYear: 1,
        yearName: '2017'
      },
      {
        noOfYear: 2,
        yearName: '2018'
      },
      {
        noOfYear: 3,
        yearName: '2019'
      },
      {
        noOfYear: 4,
        yearName: '2020'
      },
      {
        noOfYear: 5,
        yearName: '2021'
      },
      {
        noOfYear: 6,
        yearName: '2022'
      },
      {
        noOfYear: 7,
        yearName: '2023'
      },
      {
        noOfYear: 8,
        yearName: '2024'
      },
      {
        noOfYear: 9,
        yearName: '2025'
      },
      {
        noOfYear: 10,
        yearName: '2026'
      },
      {
        noOfYear: 11,
        yearName: '2027'
      },
      {
        noOfYear: 12,
        yearName: '2028'
      }
    ];

  ngOnInit() {

  }
  goBack() {
    history.back();
  }
  async ionViewWillEnter() {
  
     this.childData = this.dataExchangeService.getChildData();
     this.childName = this.childData.getStudentName();
     this.childId = this.childData.getStudentId();
     this.schoolData = this.dataExchangeService.getSchoolData();
     this.getExamType(this.childId, this.schoolData.getSchoolId());
     this.childDataArr = [];
     this.childDataArr = this.dataExchangeService.getChildArr();
     console.log('childInfo', this.childDataArr);
    //  const loading = await this.loadingControler.create({
    //   cssClass: 'my-custom-class',
    //   message: 'Please wait...',
    //   duration: 2000
    // });
    //await loading.present();
     
  }

  getTimeTable(){
debugger;
    this.localServicesService.getExamScheduleData(
      this.localServicesService.examSchedule,
      this.childId,
      this.schoolData.getSchoolId(),this.examTypeId,this.yearId
      ).subscribe((resData: Response) => {
       let parsed = JSON.parse(JSON.stringify(resData));
       this.data = JSON.stringify(resData);
       JSON.parse(this.data, async (key, value) => {
         if (typeof key === 'string'){
           if (key.toString() === 'examSchedule'){
             this.dataExchangeService.examScheduleArr = [];
             // tslint:disable-next-line: prefer-for-of
             for (let i = 0; i < parsed.examSchedule.length; i++){
                   this.dataExchangeService.storeExamScheduleData(new ExamSchedule(
                     parsed.examSchedule[i].examDate,
                     parsed.examSchedule[i].subjectId,
                     parsed.examSchedule[i].subjectName,
                     parsed.examSchedule[i].startTime,
                     parsed.examSchedule[i].endTime
                   ));
             }
             this.examScheduleArr = [];
             this.examScheduleArr = this.dataExchangeService.getExamScheduleData();
             console.log('data', this.examScheduleArr);
             //await loading.onDidDismiss();
           }
         }
       });
      },
      async err => {
        //await loading.onDidDismiss();
        // tslint:disable-next-line: no-unused-expression
        this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
      }
      );
    console.log('Error', this.error);
  }

  getExamTimeTbleFinal()
  {
    this.getTimeTable();

  }

  // Selecting Exam Type;
  async selectExamType(event: any){
    debugger;
    for (let i = 0; i < this.examTypeArr.length; i++){
      if (event.target.value === this.examTypeArr[i].getExamType()) {
          this.examTypeId = this.examTypeArr[i].getExamResultId();
         // this.getExamResult(this.childId, this.examTypeId, this.year);
          break;
      }
    }
   
  }

 // Selecting Month
 async selectYear(event: any){
  for(let i = 0; i < this.years.length; i++){
    if (event.target.value === this.years[i].yearName){
        this.yearId = this.years[i].noOfYear;
       
        break;
    }
  }
  console.log(" year is in time table", this.yearId);
}

  // Getting Type Of Exam
  async getExamType(childId, schoolId){
    
    this.localServicesService.getTypeOfExam(
      this.localServicesService.examType,
      childId,
      schoolId
    ).subscribe((resData: Response) => {
      this.data = JSON.stringify(resData);
      let parsed = JSON.parse(JSON.stringify(resData));
      console.log('Data', this.data);
      JSON.parse(this.data, (key, value) => {
        if (typeof key === 'string'){
          if ( key === 'examlist'){
            this.dataExchangeService.typeOfExamArr=[];
            for( let i = 0; i < parsed.examlist.length; i++){
              this.dataExchangeService.storeTypeOfExam(
                new ExamType(
                  parsed.examlist[i].examresultId,
                  parsed.examlist[i].examType
                )
              );
            }
            this.examTypeArr = this.dataExchangeService.getTypeOfExam();
          }
        }
      });
    },
    err => {
      // tslint:disable-next-line: no-unused-expression
      this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
    }
    );
  }

  // Selecting child from drop down
  async selectChild(event){
    for (let i = 0; i < this.childDataArr.length; i++) {
      if (event.target.value === this.childDataArr[i].getStudentName()){
        this.childId = this.childDataArr[i].getStudentId();
        // this.localServicesService.getExamScheduleData(
        //   this.localServicesService.examSchedule,
        //   this.childId,
        //   this.schoolData.getSchoolId()
        //   ).subscribe((resData: Response) => {
        //    let parsed = JSON.parse(JSON.stringify(resData));
        //    this.data = JSON.stringify(resData);
        //    JSON.parse(this.data, (key, value) => {
        //      if (typeof key === 'string'){
        //        if (key.toString() === 'examSchedule'){
        //          this.dataExchangeService.examScheduleArr = [];
        //          // tslint:disable-next-line: prefer-for-of
        //          for (let i = 0; i < parsed.examSchedule.length; i++){
        //                this.dataExchangeService.storeExamScheduleData(new ExamSchedule(
        //                  parsed.examSchedule[i].examDate,
        //                  parsed.examSchedule[i].subjectId,
        //                  parsed.examSchedule[i].subjectName,
        //                  parsed.examSchedule[i].startTime,
        //                  parsed.examSchedule[i].endTime
        //                ));
        //          }
        //          this.examScheduleArr = [];
        //          this.examScheduleArr = this.dataExchangeService.getExamScheduleData();
        //          console.log('data', this.examScheduleArr);
        //        }
        //      }
        //    });
        //   },
        //   err => {
        //     // tslint:disable-next-line: no-unused-expression
        //     this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
        //   }
        //   );
        // console.log('Error', this.error);
      }
    }
  }
  examSchedule(){

  }

  // tslint:disable-next-line: member-ordering
  Exam = "Half yearly examination Sep, 2020";

}
