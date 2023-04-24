export class ExamType{
    examresultId: any;
    examType: any;

    constructor(
        examresultId: any,
        examType: any
    ){
        this.examresultId = examresultId;
        this.examType = examType;
    }

    // Getters
    public getExamResultId(): any{
        return this.examresultId;
    }
    public getExamType(): any{
        return this.examType;
    }
}