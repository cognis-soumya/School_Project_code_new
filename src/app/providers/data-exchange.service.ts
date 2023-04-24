import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChildData } from '../pojos/children_details';
import { HolidayData } from '../pojos/holiday_data';
import { TypeOfLeave } from '../pojos/type_of_leave';
import { LeaveHistory } from '../pojos/leave_history';
import { MessageAdmin } from '../pojos/admin_message';
import { SchoolData } from '../pojos/school_details';
import { TeacherData } from '../pojos/teacher_details';
import { DailyClass } from '../pojos/daily_class';
import { WeekDays } from '../pojos/week_days';
import { AssignmentDetails } from '../pojos/assignment_details';
import { ExamSchedule } from '../model/exam_schedule';
import { AttendanceDetails } from '../pojos/attendance_details';
import { SyllabusDetails } from '../pojos/syllabus';
import { ExamType } from '../pojos/exam_type';
import { ExamTotalResult } from '../pojos/exam_total_marks';
import { FeeDetails } from '../pojos/fee_details';
import { SubjectDetails } from '../pojos/subject_details';
import { GalleryDetails } from '../pojos/gallery_details';
import { GalleryCaption } from '../pojos/gallery_caption';
import { GalleryPhoto } from '../pojos/gallery_photo_details';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
  userId = 0;
  static constUserId = 54;
  static constUserImageURL: any;
  static constUserName: any;
  static childDataArr: ChildData[] = [];
  childArr: ChildData[] = [];
  childArrChanged = new Subject<ChildData[]>();
  childData: ChildData;
  holidayArr: HolidayData[] = [];
  holidayArrChanged = new Subject<HolidayData[]>();
  typeOfLeaveArr: TypeOfLeave[] = [];
  typeOfLeaveArrChanged = new Subject<TypeOfLeave[]>();
  leaveHistoryArr: LeaveHistory[] = [];
  leaveHistoryArrChanged = new Subject<LeaveHistory[]>();
  messageAdminArr: MessageAdmin[] = [];
  messageAdminArrChanged = new Subject<MessageAdmin[]>();
  examScheduleArr: ExamSchedule[] = [];
  examScheduleArrChanged = new Subject<ExamSchedule[]>();
  attendanceDetailsArr: AttendanceDetails[] = [];
  attendanceDetailsArrChanged = new Subject<AttendanceDetails[]>();
  syllabusDetailsArr: SyllabusDetails[] = [];
  syllabusDetailsArrChanged = new Subject<SyllabusDetails[]>();
  typeOfExamArr: ExamType[] = [];
  typeOfExamArrChanged = new Subject<ExamType[]>();
  subjectDataArr: SubjectDetails[] = [];
  subjectDataArrChanged = new Subject<SubjectDetails[]>();
  examTotalResults: ExamTotalResult;
  feeDetails: FeeDetails;
  dailyClassArr: DailyClass[] = [];
  dailyClassArrChanged = new Subject<DailyClass[]>();
  galleryDataArr: GalleryDetails[] = [];
  galleryDataArrChanged = new Subject<GalleryDetails[]>();
  assignmentDetails: AssignmentDetails;
  message: MessageAdmin;
  schoolData: SchoolData;
  teacherData: TeacherData;
  galleryCaptionArr: GalleryCaption[] = [];
  galleryCaptionArrChanged = new Subject<GalleryCaption[]>();
  galleryPhotoArr: GalleryPhoto[] = [];
  galleryPhotoArrChanged = new Subject<GalleryPhoto[]>();
  galleryPhoto: GalleryPhoto;

z

  constructor() { }

  // Setting School Data
  public setSchoolData(schoolData: SchoolData){  // has to remove later
    this.schoolData = schoolData;
  }
  // Getting SchoolData
  public getSchoolData(): SchoolData{
    return this.schoolData;
  }
  // Setting Teacher Data
  public setTeacherData(teacherData: TeacherData){ // Has to remove later
    this.teacherData = teacherData;
  }
  // Getting Teacher Data
  public getTeacherData(): TeacherData{
    return this.teacherData;
  }
  // Setting userID
  setUserId(userId: any){
    this.userId = userId;
  }
  // Getting UserID
  public getUserId(){
    return this.userId;
  }
  // Setting message ID
  public setMessage(message: MessageAdmin){
    this.message = message;
  }
  // Getting Message Id
  public getMesage(): MessageAdmin{
    return this.message;
  }
  // setting Child Data
  public setChildData(childData: ChildData){
    this.childData = childData;
  }
  // Getting Child Data
  public getChildData(): ChildData{
    return this.childData;
  }
  // Storing child data to Array
  public saveChildData(childData: ChildData){
    this.childArr.push(childData);
    this.childArrChanged.next(this.childArr);
    return [...this.childArr];
  }
  // getting child List
  public getChildArr(): any{
    this.childArrChanged.next(this.childArr);
    return [...this.childArr];
  }
  // Store Holiday data
  public storeHolidayList(holidayData: HolidayData){
    // this.holidayArr = [];
    this.holidayArr.push(holidayData);
    this.holidayArrChanged.next(this.holidayArr);
    return [...this.holidayArr];
  }
  // Getting Holiday Data Arr
  public getHolidayList(): any{
    this.holidayArrChanged.next(this.holidayArr);
    return [...this.holidayArr];
  }
  // Storing Type Of leave
  public storeTypeOfLeave(typeOfLeave: TypeOfLeave){
    // this.typeOfLeaveArr = [];
    this.typeOfLeaveArr.push(typeOfLeave);
    this.typeOfLeaveArrChanged.next(this.typeOfLeaveArr);
    return [...this.typeOfLeaveArr];
  }
  // Getting Type of leave
  public getTypeOfLeave(): any{
    this.typeOfLeaveArrChanged.next(this.typeOfLeaveArr);
    return [...this.typeOfLeaveArr];
  }

  // Storing leaves
  public storeLeaveHistory(leaveHistory: LeaveHistory){
    // this.leaveHistoryArr = [];
    this.leaveHistoryArr.push(leaveHistory);
    this.leaveHistoryArrChanged.next(this.leaveHistoryArr);
    return [...this.leaveHistoryArr];
  }
  // Getting Leave History
  public getLeaveHistory(): any{
    this.leaveHistoryArrChanged.next(this.leaveHistoryArr);
    return [...this.leaveHistoryArr];
  }
  // Storing Messages from Admin
  public storeAdminMessages(messageAdmin: MessageAdmin){
    // this.messageAdminArr = [];
    this.messageAdminArr.push(messageAdmin);
    this.messageAdminArrChanged.next(this.messageAdminArr);
    return [...this.messageAdminArr];
  }
  // Get Admin Messages
  public getAdminMessages(): any{
    this.messageAdminArrChanged.next(this.messageAdminArr);
    return [...this.messageAdminArr];
  }


  // Storing Daily classes
  public stroreDailyClass(dailyClass: DailyClass){
    // this.dailyClassArr = [];
    this.dailyClassArr.push(dailyClass);
    this.dailyClassArrChanged.next(this.dailyClassArr);
    return [...this.dailyClassArr];
  }
  // getting daily Classes
  public getDailyClasses(): any{
    this.dailyClassArrChanged.next(this.dailyClassArr);
    return [...this.dailyClassArr];
  }
  // Setting Assignment details
  public setAssignmentDetails(assignmentDetails: AssignmentDetails){
    this.assignmentDetails = assignmentDetails;
  }
  // Getting Assignment details
  public getAssignmentDetails(): any{
    return this.assignmentDetails;
  }

  // Storing Exam Schedule Data
  public storeExamScheduleData(examSchedule: ExamSchedule){
    // this.examScheduleArr = [];
    this.examScheduleArr.push(examSchedule);
    this.examScheduleArrChanged.next(this.examScheduleArr);
    return [...this.examScheduleArr];
  }
  // Getting Exam Schedule data
  public getExamScheduleData(): any{
    this.examScheduleArrChanged.next(this.examScheduleArr);
    return [...this.examScheduleArr];
  }

  // Storing Attendance Details data
  public storeAttendanceDetails(attendanceDetails: AttendanceDetails){
    // this.attendanceDetailsArr = [];
    this.attendanceDetailsArr.push(attendanceDetails);
    this.attendanceDetailsArrChanged.next(this.attendanceDetailsArr);
    return [...this.attendanceDetailsArr];
  }

  // Getting Attendance Details data
  public getAttendanceDetails(): any{
    this.attendanceDetailsArrChanged.next(this.attendanceDetailsArr);
    return [...this.attendanceDetailsArr];
  }

  // Storing Syllabus data
  public storeSyllabusDetails(syllabusDetails: SyllabusDetails){
    // this.syllabusDetailsArr = [];
    this.syllabusDetailsArr.push(syllabusDetails);
    this.syllabusDetailsArrChanged.next(this.syllabusDetailsArr);
    return [...this.syllabusDetailsArr];
  }

  // Getting Syllabus Details
  public getSyllabusDetails(): any{
    this.syllabusDetailsArrChanged.next(this.syllabusDetailsArr);
    return [...this.syllabusDetailsArr];
  }

  // Storing Type Exam
  public storeTypeOfExam(examType: ExamType){
    // this.typeOfExamArr = [];
    this.typeOfExamArr.push(examType);
    this.typeOfExamArrChanged.next(this.typeOfExamArr);
    return[...this.typeOfExamArr];
  }

  // Getting Type Of Exam
  public getTypeOfExam(): any{
    this.typeOfExamArrChanged.next(this.typeOfExamArr);
    return[...this.typeOfExamArr];
  }

  // Storing Exam Result
  public storeExamResult(examTotalresult: ExamTotalResult){
    this.examTotalResults = examTotalresult;
    return this.examTotalResults;
  }
  // Getting examTotal Result
  public getExamTotalResult(): any{
    return this.examTotalResults;
  }
  // Storing Fee details
  public storeFeeDetails(feeDetails: FeeDetails){
    this.feeDetails = feeDetails;
    return this.feeDetails;
  }
  // Getting Fee Details
  public getFeeDetails(): any{
    return this.feeDetails;
  }

  // Settting Current GalleryPhoto
  public setCurrentGalleryPhoto(galleryPhoto: GalleryPhoto){
    this.galleryPhoto = galleryPhoto;
  }

  // Getting Gallery Photo
  public getCurrentGalleryPhoto(): GalleryPhoto{
    return this.galleryPhoto;
  }
  // Storing Subject data
  public storeSubjects(subjectDetails: SubjectDetails){
      // this.subjectDataArr = [];
      this.subjectDataArr.push(subjectDetails);
      this.subjectDataArrChanged.next(this.subjectDataArr);
      return [...this.subjectDataArr];
  }

  // Getting Subject Data
  public getSubjectData(): any{
    this.subjectDataArrChanged.next(this.subjectDataArr);
    return [...this.subjectDataArr];
  }

  // Storing GalleyDetails
  public storeGalleryDetails(galleryDetails: GalleryDetails){
    this.galleryDataArr.push(galleryDetails);
    this.galleryDataArrChanged.next(this.galleryDataArr);
    return [...this.galleryDataArr];
  }

  // Getting Gallery data
  public getGalleryData(): any{
    this.galleryDataArrChanged.next(this.galleryDataArr);
    return [...this.galleryDataArr];
  }

  // Store Gallery captions
  public storeGalleryCaption(galleryCaption: GalleryCaption){
    this.galleryCaptionArr.push(galleryCaption);
    this.galleryCaptionArrChanged.next(this.galleryCaptionArr);
    return [...this.galleryCaptionArr];
  }

  // Getting Gallery Caption
  public getGalleryCaption(): any{
    this.galleryCaptionArrChanged.next(this.galleryCaptionArr);
    return [...this.galleryCaptionArr];
  }

  // Store Gallery Photos
  public storeGalleryPhoto(galleryPhoto: GalleryPhoto){
    this.galleryPhotoArr.push(galleryPhoto);
    this.galleryPhotoArrChanged.next(this.galleryPhotoArr);
    return [...this.galleryPhotoArr];
  }

  // Getting Gallery Photos
  public getGalleryPhoto(): any{
    this.galleryPhotoArrChanged.next(this.galleryPhotoArr);
    return [...this.galleryPhotoArr];
  }

}
