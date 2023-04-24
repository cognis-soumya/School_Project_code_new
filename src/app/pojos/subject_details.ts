export class SubjectDetails{
    subjectId: any;
    subjectName: any;
    constructor(
        subjectId: any,
        subjectName: any
    ){
        this.subjectId = subjectId;
        this.subjectName = subjectName;
    }
    // Getters
    public getSubjectId(): any{
        return this.subjectId;
    }
    public getSubjectName(): any{
        return this.subjectName;
    }
}