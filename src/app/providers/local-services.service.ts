import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocalServicesService {
// 3.17.165.248
//public baseUrl = 'http://141.148.206.25:8083';
 public baseUrl = 'http://localhost:8080/';
 public loginUrl = 'SchoolWebApp/rest/logInService';
 public childInfoURL = 'SchoolWebApp/rest/parentService';
 public holidayListURL = 'SchoolWebApp/rest/holidayService';
 public typesOfLeave = 'SchoolWebApp/rest/typeofLeaveservice';
 public leaveService = 'SchoolWebApp/rest/leavesservice';
 public leaveHistory = 'SchoolWebApp/rest/leavesservice';
 public messageFromAdmin = 'SchoolWebApp/rest/messageService';
 public dailyClassSchedule = 'SchoolWebApp/rest/classsceduleService';
 public assignmentDetails = 'SchoolWebApp/rest/assignmentService';
 public examSchedule = 'SchoolWebApp/rest/examScheduleService/getByStudent';//'SchoolWebApp/rest/examService';
 public cancelLeaveUrl = 'SchoolWebApp/rest/leavesservice/cancel';
 public studentAttendance = 'SchoolWebApp/rest/studentAttendenceService';
 public syllabusDetails = 'SchoolWebApp/rest/syllabusService';
 public syllabusDetailsStudent = 'SchoolWebApp/rest/syllabusService/forStudent';
 public feeDetails = 'SchoolWebApp/rest/feedetailsservice/feeForstudent';
 public examResult = 'SchoolWebApp/rest/examresult';
 public examType = 'SchoolWebApp/rest/examresult/examtype';
 public subjectDetails = 'SchoolWebApp/rest/classSubjetService';
 public syllabusDownloadURL = 'SchoolWebApp/rest/syllabusService';
 public galleryURL = 'SchoolWebApp/rest/galleeryservice/allGallaryList';
 public galleryMaster = 'SchoolWebApp/rest/galleeryservice/galleryTypeList';
 public galleryFilterData = 'SchoolWebApp/rest/galleeryservice';

//  http://localhost:8095/SchoolWebApp/rest/holidayService?fromDate=2020/08/03&toDate=2020/08/28&schoolId=1

 constructor(public http: HttpClient) { }

  // Login API
  getLoginDataReq(url: string, phoneInput: string, passwordInput: string): Observable<object>{
      return this.http.get(this.baseUrl + url + '?phoneNo=' + phoneInput + '&password=' + passwordInput);
  }
  // Child Info API
  getChildInfo(url: string, userID: any): Observable<object>{
     return this.http.get(this.baseUrl + url + '?userId=' + userID);
  }
  // Holiday list API
  public getHoliday(url: string, fromDate: any, todate: any, schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?fromDate=' + fromDate + '&toDate=' + todate + '&schoolId=' + schoolId);
  }

  // Types of leave
  public getTypesOfLeaves(url: string, schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?schoolId=' + schoolId);
  }

  // Posting leave application
  public saveLeaveApplication(url: string, body: any): Observable<object>{
    return this.http.post<any>(this.baseUrl + url, body);
  }

  // Calling leave history
  public getLeaveHistory(url: string, studentId: any, parentId: any): Observable<object>{
   return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&parentId=' + parentId);
  }

  // Calling Message from School
  public getAdminMessages(url: string, schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + schoolId);
  }

  // Calling Daily Classes
  public getDailyClasses(url: string, studentId: any, schoolId: any, daysId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&schoolId=' + schoolId + '&daysId=' + daysId);
  }

  // Calling  Assignment details
  public getAssignmentDetails(url: string, studentId: any, schoolId: any, subjectId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&schoolId=' + schoolId + '&subjectId=' + subjectId);
  }

  // Calling Exam Schedule Data
  public getExamScheduleData(url: string, studentId: any, schoolId: any,examTypeId, createdDate:any ): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&schoolId=' + schoolId+ '&examTypeId=' + examTypeId+ '&createdDate=' + createdDate);
  }

  // Canceling the leaves
  public cancelLeave(url: string, body: any, headers: any): Observable<object>{
    return this.http.put(this.baseUrl + url, body, headers);
  }

  // Getting the attendance
  public getAttendance(url: string, studentId: any, fromDate: any, toDate: any): Observable<object> {
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&fromDate=' + fromDate + '&toDate=' + toDate);
  }
  // Getting Syllabus call
  public getSyllabusData(url: string, studentId: any,schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&schoolId=' + schoolId);
    // ?studentId=1&schoolId=1
  }

  // Getting Syllabus call
  public getSyllabusDataStudent(url: string, studentId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId);
    // ?studentId=1&schoolId=1
  }

  // Getting Fee details ?studentId=1&month=1
  public getFeeDetails(url: string, studentId: any,): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId );
  }
  // Getting type of exam
  public getTypeOfExam(url: string, studentId: any, schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&schoolId=' + schoolId);
  }
  // Getting Exam Result ?studentId=1&examresultId=1&year=2020
  public getExamResult(url: string, studentId: any, createdDate: any, typeOfExamId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId +  '&createdDate=' + createdDate+ '&typeOfExamId=' + typeOfExamId);
  }
  // Getting Subject Details
  public getSubjectNames(url: string, studentId: any, schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?studentId=' + studentId + '&schoolId=' + schoolId);
  }

  // Getting Gallery Masters
  public getGalleryMasters(url: string, schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?schoolId=' + schoolId);
  }

  // Getting Gallery photos and videos
  public getGalleryData(url: string, schoolId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?schoolId=' + schoolId + '&caption=&galleryTypeId=');
  }

  // Getting Gallery Filter data
  public getGalleryFilterData(url: string, schoolId: any, caption: any, galleryTypeId: any): Observable<object>{
    return this.http.get(this.baseUrl + url + '?schoolId=' + schoolId + '&caption=' + caption + '&galleryTypeId=' + galleryTypeId);
  }
}
