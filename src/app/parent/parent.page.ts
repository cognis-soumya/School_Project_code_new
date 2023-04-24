import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { DataExchangeService } from '../providers/data-exchange.service';
import { TypeOfLeave } from '../pojos/type_of_leave';
import { ChildData } from '../pojos/children_details';
import { TeacherData } from '../pojos/teacher_details';
import { SchoolData } from '../pojos/school_details';
import { PopoverComponent } from './../popover/popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.page.html',
  styleUrls: ['./parent.page.scss'],
})
export class ParentPage implements OnInit {

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

  constructor(private router: Router,
              private http: HttpClient,
              private dataExchangeService: DataExchangeService,
              private popCtrl: PopoverController
              ) {

this.data = '';
this.error = '';
this.localServicesService = new LocalServicesService(http);
}

ngOnInit() {
}
// This a method where are creating model
ionViewWillEnter() {
  // console.log('UserID check => ' , DataExchangeService.constUserId);
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
  this.router.navigate(['/home']);
}
childinfo(){
  this.router.navigate(['/childinfo']);
}
leaves(){
  this.router.navigate(['/leaves']);
}
feedetails(){
  this.router.navigate(['/feedetails']);
}
examresult(){
  this.router.navigate(['/examresult']);
}
examSchedule(){
  this.router.navigate(['/examschedule']);
}
message(){
  this.router.navigate(['/message']);
}
dailyClassSchedule(){
  this.router.navigate(['/daily-class-schedule']);
}
attendance(){
  this.router.navigate(['/child-attendance']);
}
assignments(){
  this.router.navigate(['/assignment']);
}
holidayList(){
  this.router.navigate(['/holiday-list']);
}

syllabus(){
  this.router.navigate(['/syllabus']);
}

parentTeacherCommunication(){
  this.router.navigate(['/parent-teacher-communication']);
}

gallery(){
  this.router.navigate(['/gallery']);
}

async openPopover(ev: any){
  const popover = await this.popCtrl.create({
    component: PopoverComponent,
    event: ev,
    translucent: true
  });
  
  // popover.onDidDismiss().then((data:any)=>
  // console.log(data))
  return await popover.present();
}

}
