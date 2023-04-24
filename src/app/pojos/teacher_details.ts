export class TeacherData{
    teacherId: any;
    teacherName: any;
    teacherPhoneNo: any;
    teacheremail: any;

    constructor(
        teacherId: any,
        teacherName: any,
        teacherPhoneNo: any,
        teacheremail: any){
            this.teacherId = teacherId;
            this.teacherName = teacherName;
            this.teacherPhoneNo = teacherPhoneNo;
            this.teacheremail = teacheremail;
        }

    public setTeacherId(teacherId: any){
       this.teacherId = teacherId;
    }
    public setTeacherName(teacherName: any){
        this.teacherName = teacherName;
    }
    public setTeacherPhoneNo(teachePhoneNo: any){
        this.teacherPhoneNo = teachePhoneNo;
    }
    public setTeacherEmail(teacheremail: any){
        this.teacheremail = teacheremail;
    }

    public getTeacherId(): any{
        return this.teacherId;
    }
    public getTeacherName(): any{
        return this.teacherName;
    }
    public getTeacherPhoneNo(): any{
        return this.teacherPhoneNo;
    }
    public getTeacherEmail(): any{
        return this.teacheremail;
    }
}