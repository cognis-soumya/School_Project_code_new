import { TeacherData } from './teacher_details';
import { SchoolData } from './school_details';
export class ChildData {
    userId: any;
    studentId: any;
    studentName: any;
    section: any;
    classId: any;
    classes: any;
    regNo: any;
    imageUrl: any;
    teacherData: TeacherData;
    schoolData: SchoolData;

    constructor(
        userId: any,
        studentId: any,
        studentName: any,
        section: any,
        classId: any,
        classes: any,
        regNo: any,
        imageUrl: any,
        teacherData: TeacherData,
        schoolData: SchoolData
    ) {
        this.userId = userId;
        this.studentId = studentId;
        this.studentName = studentName;
        this.section = section;
        this.classId = classId;
        this.classes = classes;
        this.regNo = regNo;
        this.imageUrl = imageUrl;
        this.teacherData = teacherData;
        this.schoolData = schoolData;
    }


    public setStudentId(studentId: any){
        this.studentId = studentId;
    }
    public setStudentName(studentName: any){
        this.studentName = studentName;
    }
    public setSection(section: any){
        this.section = section;
    }
    public setClassId(classId: any){
        this.classId = classId;
    }
    public setClasses(classes: any){
        this.classes = classes;
    }
    public setRegNo(regNo: any){
        this.regNo = regNo;
    }

    public setImageUrl(imageUrl: any){
        this.imageUrl = imageUrl;
    }
    public setTeacherData(teacherData: TeacherData){
        this.teacherData = teacherData;
    }
    public setSchoolData(schoolData: SchoolData){
        this.schoolData = schoolData;
    }

    public getStudentId(): any{
        return this.studentId;
    }
    public getStudentName(): any{
        return this.studentName;
    }
    public getSection(): any{
        return this.section;
    }
    public getClassId(): any{
        return this.classId;
    }
    public getClasses(): any{
        return this.classes;
    }
    public getRegNo(): any{
        return this.regNo;
    }
    public getImageUrl(): any{
        return this.imageUrl;
    }
    public getTeacherData(): TeacherData{
        return this.teacherData;
    }
    public getSchoolData(): SchoolData{
        return this.schoolData;
    }
}