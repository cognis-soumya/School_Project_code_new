import { Component, OnInit } from '@angular/core';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { SchoolData } from '../pojos/school_details';
import { TeacherData } from '../pojos/teacher_details';

@Component({
  selector: 'app-childinfo',
  templateUrl: './childinfo.page.html',
  styleUrls: ['./childinfo.page.scss'],
})
export class ChildinfoPage implements OnInit {

  childDataArr: ChildData[] = [];
  localServicesService: LocalServicesService;
  // private dataExchangeService: DataExchangeService;
  data = '';
  error = '';
  childData: ChildData;
  childName: any;
  schoolData: SchoolData;
  teacherData: TeacherData;
  classes = '';
  section = '';
  rollNo = '';
  teacherName = '';
  teacherPhone = '';
  teacherEmail = '';
  schoolName = '';
  schoolPhone = '';
  schoolEmail = '';
  childCount = 0;

  constructor(private router: Router,
              private http: HttpClient,
              private dataExchangeService: DataExchangeService) {
      this.data = '',
      this.error = '',
      this.localServicesService = new LocalServicesService(this.http);
  }
  ngOnInit() {
  }
  // This a method where are creating model
  ionViewWillEnter() {
    this.childData = this.dataExchangeService.getChildData();
    this.childName = this.childData.getStudentName();
    this.classes = this.childData.getClasses();
    this.section = this.childData.getSection();
    this.rollNo = this.childData.getRegNo();
    this.teacherName = this.childData.getTeacherData().getTeacherName();
    this.teacherPhone = this.childData.getTeacherData().getTeacherPhoneNo();
    this.teacherEmail = this.childData.getTeacherData().getTeacherEmail();
    this.schoolName = this.childData.getSchoolData().getSchoolName();
    this.schoolPhone = this.childData.getSchoolData().getPhoneNo();
    this.schoolEmail = this.childData.getSchoolData().getEmail();
    
    // this.localServicesService.getChildInfo(
    //   this.localServicesService.childInfoURL,
    //   DataExchangeService.constUserId
    //   ).subscribe(
    //   (resData: Response) => {
    //     let parsed = JSON.parse(JSON.stringify(resData));
    //     // parsed.childList
    //     this.data = JSON.stringify(resData);
    //     // console.log('childInfo', parsed.childList);
    //     JSON.parse(this.data, (key, value) => {
    //       if (typeof key === 'string'){
    //         // console.log('Userdata : ', key);
    //         if (key.toString() === 'childList'){
    //           this.dataExchangeService.childArr = [];
    //             // tslint:disable-next-line: prefer-for-of
    //           for (let i = 0; i < parsed.childList.length; i++){
    //              this.dataExchangeService.saveChildData(new ChildData(
    //                parsed.childList[i].studentId,
    //                parsed.childList[i].studentname,
    //                parsed.childList[i].section,
    //                parsed.childList[i].classes,
    //                parsed.childList[i].regNo,
    //                new TeacherData(
    //                  parsed.childList[i].classTeacherInfo.teacherId,
    //                  parsed.childList[i].classTeacherInfo.teacherName,
    //                  parsed.childList[i].classTeacherInfo.teacherPhoneNo,
    //                  parsed.childList[i].classTeacherInfo.teacheremail
    //                ),
    //                new SchoolData(
    //                  parsed.childList[i].schoolModel.schoolId,
    //                  parsed.childList[i].schoolModel.schoolName,
    //                  parsed.childList[i].schoolModel.email,
    //                  parsed.childList[i].schoolModel.phoneNo
    //                  )
    //              ));
    //             }
    //           this.childDataArr = this.dataExchangeService.getChildArr();
    //           this.childCount = this.childDataArr.length;
    //           console.log('childInfo', this.childDataArr);
    //           this.childData = this.childDataArr[0];
    //           this.childName = this.childData.getStudentName();
    //           this.dataExchangeService.setSchoolData(this.childData.getSchoolData());
    //           this.dataExchangeService.setTeacherData(this.childData.getTeacherData());
    //         }
    //       }
    //     });
    //   },
    //   err => {
    //     this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
    //   }
    // );
    // console.log('error', this.error);
  }

  goBack() {
    history.back();
  }

  async selectChild(event: any){
      this.childName = event.target.value;
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.childDataArr.length; i++){
          if (this.childDataArr[i].getStudentName() === this.childName){
              this.childData = null;
              this.childData = this.childDataArr[i];
              this.classes = this.childData.getClasses();
              this.section = this.childData.getSection();
              this.rollNo = this.childData.getRegNo();
              this.teacherName = this.childData.getTeacherData().getTeacherName();
              this.teacherPhone = this.childData.getTeacherData().getTeacherPhoneNo();
              this.teacherEmail = this.childData.getTeacherData().getTeacherEmail();
              this.schoolName = this.childData.getSchoolData().getSchoolName();
              this.schoolPhone = this.childData.getSchoolData().getPhoneNo();
              this.schoolEmail = this.childData.getSchoolData().getEmail();
          }
      }
  }
}
