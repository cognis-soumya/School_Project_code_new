import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { DataExchangeService } from '../providers/data-exchange.service';
import { ChildData } from '../pojos/children_details';
import { TeacherData } from '../pojos/teacher_details';
import { SchoolData } from '../pojos/school_details';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.page.html',
  styleUrls: ['./child-list.page.scss'],
})
export class ChildListPage implements OnInit {

  childDataArr: ChildData[] = [];
  localServicesService: LocalServicesService;
  // private dataExchangeService: DataExchangeService;
  data = '';
  error = '';
  childData: ChildData;
  childName: any;
  schoolData: SchoolData;
  teacherData: TeacherData;
  childCount = 0;
  childTag ='Child  ';
  constructor(private router: Router,
              private http: HttpClient,
              private dataExchangeService: DataExchangeService) {
      this.data = '';
      this.error = '';
      this.localServicesService = new LocalServicesService(this.http);
  }

  ngOnInit() {
  }
  
  // This a method where are creating model
  ionViewWillEnter() {
    console.log('UserID check => ' , DataExchangeService.constUserId);
    this.localServicesService.getChildInfo(
      this.localServicesService.childInfoURL,
      DataExchangeService.constUserId
      ).subscribe(
      (resData: Response) => {
        let parsed = JSON.parse(JSON.stringify(resData));
        // parsed.childList
        this.data = JSON.stringify(resData);
        // console.log('childInfo', parsed.childList);
        JSON.parse(this.data, (key, value) => {
          if (typeof key === 'string'){
            // console.log('Userdata : ', key);
            if (key.toString() === 'childList'){
              this.dataExchangeService.childArr = [];
                // tslint:disable-next-line: prefer-for-of
              for (let i = 0; i < parsed.childList.length; i++){
                this.dataExchangeService.saveChildData(new ChildData(
                  parsed.childList[i].userId,
                  parsed.childList[i].studentId,
                  parsed.childList[i].studentname,
                  parsed.childList[i].section,
                  parsed.childList[i].classId,
                  parsed.childList[i].classes,
                  parsed.childList[i].regNo,
                  parsed.childList[i].imageUrl,
                  new TeacherData(
                    parsed.childList[i].classTeacherInfo.teacherId,
                    parsed.childList[i].classTeacherInfo.teacherName,
                    parsed.childList[i].classTeacherInfo.teacherPhoneNo,
                    parsed.childList[i].classTeacherInfo.teacheremail
                  ),
                  new SchoolData(
                    parsed.childList[i].schoolModel.schoolId,
                    parsed.childList[i].schoolModel.schoolName,
                    parsed.childList[i].schoolModel.email,
                    parsed.childList[i].schoolModel.phoneNo
                    )
                ));
                }
              this.childDataArr = this.dataExchangeService.getChildArr();
              this.childCount = this.childDataArr.length;
              console.log('childInfo', this.childDataArr);
              this.childData = this.childDataArr[0];
              this.childName = this.childData.getStudentName();
              this.dataExchangeService.setSchoolData(this.childData.getSchoolData());
              this.dataExchangeService.setTeacherData(this.childData.getTeacherData());
            }
          }
        });
      },
      err => {
        // tslint:disable-next-line: no-unused-expression
        this.error = 'An error occurred,  Status:' + err.status, + 'Message:' + err.statusText;
      }
    );
    console.log('error', this.error);
  }

  async child1(child){
    if (child !== null){
      this.dataExchangeService.setChildData(child);
      this.router.navigate(['/parent']);
    }
  }

  goBack() {
    history.back();
  }

}
