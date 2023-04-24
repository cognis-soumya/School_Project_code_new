export class SchoolData{
    schoolId: any;
    schoolName: any;
    email: any;
    phoneNo: any;

    constructor(
        schoolId: any,
        schoolName: any,
        email: any,
        phoneNo: any
    ){
        this.schoolId = schoolId;
        this.schoolName = schoolName;
        this.email = email;
        this.phoneNo = phoneNo;
    }

    public setSchoolId(schoolId: any){
        this.schoolId = schoolId;
    }
    public setSchoolName(schoolName: any){
        this.schoolName = schoolName;
    }
    public setEmail(email: any){
        this.email = email;
    }
    public setPhoneNo(phoneNo: any){
        this.phoneNo = phoneNo;
    }

    public getSchoolId(): any{
        return this.schoolId;
    }
    public getSchoolName(): any{
        return this.schoolName;
    }
    public getEmail(): any{
        return this.email;
    }
    public getPhoneNo(): any{
        return this.phoneNo;
    }
}