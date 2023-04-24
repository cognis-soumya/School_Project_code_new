export class ExamSchedule{
    date: any;
    subjectId: any;
    subjectName: any;
    startTime: any;
    endTime: any;

    constructor(
        date: any,
        subjectId: any,
        subjectName: any,
        startTime: any,
        endTime: any
    ){
        this.date = date;
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    // GETTERS
    public getDate(): any{
        return this.date;
    }
    public getSubjectId(): any{
        return this.subjectId;
    }
    public getSubjectName(): any{
        return this.subjectName;
    }
    public getStartTime(): any{
        return this.startTime;
    }
    public getEndTime(): any{
        return this.endTime;
    }
}
