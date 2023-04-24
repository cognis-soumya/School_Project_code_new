
export class SyllabusDetails{
    subjectId: any;
    subjectName: any;
    subjectURL: any;

    constructor(
        subjectId: any,
        subjectName: any,
        subjectURL: any
    ){
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.subjectURL = subjectURL;
    }

    // Getters
    public getSubjectId(): any{
        return this.subjectId;
    }
    public getSubjectName(): any{
        return this.subjectName;
    }

    public getSubjectURL(): any{
        return this.subjectURL;
    }
}