export class DailyClass{
    day: any;
    subjectId: any;
    subjectName: any;
    teacherName: any;
    startTime: any;
    endTime: any;

    constructor(
        day: any,
        subjectId: any,
        subjectName: any,
        teacherName: any,
        startTime: any,
        endTime: any
    ){
        this.day = day;
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.teacherName = teacherName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    // Getters
    public getDay(): any{
        return this.day;
    }
    public getSubjectId(): any{
        return this.subjectId;
    }
    public getSubjectName(): any{
        return this.subjectName;
    }
    public getTeacherName(): any{
        return this.teacherName;
    }
    public getStartTime(): any{
        return this.startTime;
    }
    public getEndTime(): any{
        return this.endTime;
    }

    // SETTERS
    public setStartTime(startTime: any){
        this.startTime = startTime;
    }
    public setEndTime(endTime: any){
        this.endTime = endTime;
    }
}