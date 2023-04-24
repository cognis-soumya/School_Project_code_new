export class ExamResults{
    subjectId: any;
    subjectName: any;
    totalMarks: any;
    scoredMarks: any;
    passmarks: any;

    constructor(
        subjectId: any,
        subjectName: any,
        totalMarks: any,
        scoredMarks: any,
        passmarks: any
    ){
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.totalMarks = totalMarks;
        this.scoredMarks = scoredMarks;
        this.passmarks = passmarks;
    }

    public getSubjectId(): any{
        return this.subjectId;
    }
    public getSubjectName(): any{
        return this.subjectName;
    }
    public getTotalMarks(): any{
        return this.totalMarks;
    }
    public getScoredMarks(): any{
        return this.scoredMarks;
    }
    public getPassmarks(): any{
        return this.passmarks;
    }
}