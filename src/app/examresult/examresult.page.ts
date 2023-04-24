import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { ExamTotalResult } from '../pojos/exam_total_marks';
import { ExamResults } from '../pojos/exam_results';
import { SchoolData } from '../pojos/school_details';
import { ExamType } from '../pojos/exam_type';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-examresult',
  templateUrl: './examresult.page.html',
  styleUrls: ['./examresult.page.scss'],
})
export class ExamresultPage implements OnInit {
  childDataArr: ChildData[] = [];
  examTypeArr: ExamType[] = [];
  schoolData: SchoolData;
  localServicesService: LocalServicesService;
  error: any;
  data: any;
  examResultArr: ExamResults[] = [];
  examTotalResult: ExamTotalResult;
  totalMarks = '';
  scoredMarks = '';
  grade = '';
  percentage = '';
  childId: any;
  examTypeId: any;
 // year = '2021';
  childData: ChildData;
  childName: any;
  yearId: any;

  constructor(
    private router: Router,
    private http: HttpClient,
    public loadingControler: LoadingController,
    private dataExchangeService: DataExchangeService) {
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

  ionViewWillEnter() {
    this.childData = this.dataExchangeService.getChildData();
    this.childName = this.childData.getStudentName();
    this.childId = this.childData.getStudentId();
    this.childDataArr = this.dataExchangeService.getChildArr();
    this.schoolData = this.dataExchangeService.getSchoolData();
  
    this.getExamType(this.childId, this.schoolData.getSchoolId());
   

  }
  // Selecting Child
  // async selectChild(event: any){
  //   for(let i = 0; i < this.childDataArr.length; i++){
  //     if (event.target.value === this.childDataArr[i].getStudentName()){
  //       this.childId = this.childDataArr[i].getStudentId();
  //       this.getExamType(this.childId, this.schoolData.getSchoolId());
  //       break;
  //     }
  //   }
  // }

  getExamResultFinal(){
   this.getExamResult(this.childId,this.yearId ,this.examTypeId );
    //this.getExamResult(22,2021,3);
    //this.getExamResult();
   // this.getExamResult(22,2021,3);
  }

  

  // Selecting Exam Type;
  async selectExamType(event: any){
    for (let i = 0; i < this.examTypeArr.length; i++){
      if (event.target.value === this.examTypeArr[i].getExamType()) {
          this.examTypeId = this.examTypeArr[i].getExamResultId();
          break;
      }
    }
    
  }

  // Selecting Month
  async selectYear(event: any){
    for(let i = 0; i < this.years.length; i++){
      if (event.target.value === this.years[i].yearName){
          this.yearId = this.years[i].yearName;
         
          break;
      }
    }
    console.log('year in select is',this.yearId);
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

  // Getting Exam Results Data
  async getExamResult(childId, year,examResultId){
    const loading = await this.loadingControler.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.localServicesService.getExamResult(
      this.localServicesService.examResult,
      childId,
       year,
      examResultId,
     
    ).subscribe((resData: Response) => {
      this.data = JSON.stringify(resData);
       console.log('Exam Results', this.data);
      let parsed = JSON.parse(JSON.stringify(resData));
      JSON.parse(this.data, async (key, value) => {
        if (typeof key === 'string'){
            if (key === 'examResultList') {
              let examResultArr: ExamResults[] = [];
              for (let i = 0; i < parsed.examResultList[0].examSubjectResultList.length; i++) {
                 examResultArr.push(
                   new ExamResults(
                    parsed.examResultList[0].examSubjectResultList[i].subjectId,
                    parsed.examResultList[0].examSubjectResultList[i].subjectName,
                    parsed.examResultList[0].examSubjectResultList[i].totalMarks,
                    parsed.examResultList[0].examSubjectResultList[i].scoredMarks,
                    parsed.examResultList[0].examSubjectResultList[i].passmarks
                   )
                 );
              }

              this.dataExchangeService.storeExamResult(
                new ExamTotalResult(
                  parsed.examResultList[0].percentage,
                  parsed.examResultList[0].totalMarks,
                  parsed.examResultList[0].scoredMarks,
                  parsed.examResultList[0].grade,
                  parsed.examResultList[0].passmarks,
                  examResultArr
                )
              );
              this.examTotalResult = this.dataExchangeService.getExamTotalResult();
              this.examResultArr = this.examTotalResult.getExamResultList();
              this.totalMarks = this.examTotalResult.totalMarks;
              this.scoredMarks = this.examTotalResult.scoredMarks;
              this.percentage = this.examTotalResult.percentage;
              this.grade = this.examTotalResult.grade;
              console.log('Exam', this.totalMarks);
              await loading.onDidDismiss();
            }
        }
      });
    },
       async err => {
        await loading.onDidDismiss();
         // tslint:disable-next-line: no-unused-expression
         this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
       }
    );
  }



}
