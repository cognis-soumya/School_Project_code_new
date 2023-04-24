import { Component, OnInit } from '@angular/core';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { SchoolData } from '../pojos/school_details';
import { DailyClass } from '../pojos/daily_class';
import { AssignmentDetails } from '../pojos/assignment_details';
import { SubjectDetails } from '../pojos/subject_details';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {
  childData: ChildData;
  dailyClassArr: DailyClass[] = [];
  localServicesService: LocalServicesService;
  data = '';
  error = '';
  subjectId = '1';
  childId: any;
  childName: any;
  assignmentDetails: AssignmentDetails;
  assignmentStartDate = '';
  assignmentCompleateDate = '';
  assignmentStatus = false;
  assignmentTitle = '';
  schoolData: SchoolData;
  subjectDetailsArr: SubjectDetails[] = [];

  constructor(private router: Router,
              private http: HttpClient,
              private dataExchangeService: DataExchangeService) {
      this.data = '',
      this.error = '',
      this.localServicesService = new LocalServicesService(this.http);
  }
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.childData = this.dataExchangeService.getChildData();
    this.childId = this.childData.getStudentId();
    this.childName = this.childData.getStudentName();
    this.dailyClassArr = [];
    // this.childDataArr = this.dataExchangeService.getChildArr();
    this.dailyClassArr = this.dataExchangeService.getDailyClasses();
    this.getSubjects();
  }

  goBack() {
    history.back();
  }
  // async selectChild(event: any){
  //   // tslint:disable-next-line: prefer-for-of
  //   for (let i = 0; i < this.childDataArr.length; i++){
  //     if (this.childDataArr[i].getStudentName() === event.target.value){
  //       this.childId = this.childDataArr[i].getStudentId();
  //       this.getSubjects();
  //       // break;
  //     }
  //   }
  // }

  async selectSubject(event: any){
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.subjectDetailsArr.length; i++){
      if (this.subjectDetailsArr[i].getSubjectName() === event.target.value){
        this.subjectId = this.subjectDetailsArr[i].getSubjectId();
        break;
      }
    }
    this.localServicesService.getAssignmentDetails(
      this.localServicesService.assignmentDetails,
      this.childId,
      this.dataExchangeService.getSchoolData().getSchoolId(),
      this.subjectId).subscribe((resData: Response) => {
        let parsed = JSON.parse(JSON.stringify(resData));
        this.data = JSON.stringify(resData);
        this.dataExchangeService.setAssignmentDetails(new AssignmentDetails(
          parsed.assignDateTime,
          parsed.assignCompleteDateTime,
          parsed.completionStatus,
          parsed.title
        ));
        this.assignmentDetails = this.dataExchangeService.getAssignmentDetails();
        console.log('assignment details', this.assignmentDetails);
        this.assignmentStartDate = this.assignmentDetails.getAssignDateTime();
        this.assignmentCompleateDate = this.assignmentDetails.getAssignCompleteDateTime();
        this.assignmentStatus = this.assignmentDetails.getCompletionStatus();
        this.assignmentTitle = this.assignmentDetails.getTitle();
      },
      err => {
        this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
      }
    );
    console.log('error', this.error);
  }

  // Getting the subject details call
  async getSubjects(){
    this.schoolData = this.dataExchangeService.getSchoolData();
    this.localServicesService.getSubjectNames(
      this.localServicesService.subjectDetails,
      this.childId,
      this.schoolData.getSchoolId()
    ).subscribe((resData: Response) => {
      let parsed = JSON.parse(JSON.stringify(resData));
      this.data = JSON.stringify(resData);
      JSON.parse(this.data, (key, value) => {
        if (typeof key === 'string'){
          if (key === 'subjectList'){
            this.dataExchangeService.subjectDataArr = [];
            for (let i = 0; i < parsed.subjectList.length; i++){
              this.dataExchangeService.storeSubjects(
                new SubjectDetails(
                  parsed.subjectList[i].subjectId,
                  parsed.subjectList[i].subjectName
                )
              );
            }
            this.subjectDetailsArr = this.dataExchangeService.getSubjectData();
          }
        }
      });
      console.log("subjects list is ", this.subjectDetailsArr);
    },
    err => {
      this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
    });
  }
}
