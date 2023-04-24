import { ExamResults } from './exam_results';
import { Subject } from 'rxjs';
export class ExamTotalResult{
    percentage: any;
    totalMarks: any;
    scoredMarks: any;
    grade: any;
    passmarks: any;
    examResultList: ExamResults[];
    examResultArrChanged = new Subject<ExamResults[]>();

    constructor(
        percentage: any,
        totalMarks: any,
        scoredMarks: any,
        grade: any,
        passmarks: any,
        examResultList: any
    ){
        this.percentage = percentage;
        this.totalMarks = totalMarks;
        this.scoredMarks = scoredMarks;
        this.grade = grade;
        this.passmarks = passmarks;
        this.examResultList = examResultList;
        this.examResultArrChanged.next(this.examResultList);
    }

    // Getters
    public getPercetage(): any{
        return this.percentage;
    }

    public getTotalMarks(): any{
        return this.totalMarks;
    }

    public getScoredMarks(): any{
        return this.scoredMarks;
    }

    public getGrade(): any{
        return this.grade;
    }

    public getPassmarks(): any{
        return this.passmarks;
    }

    public getExamResultList(): any{
        this.examResultArrChanged.next(this.examResultList);
        return [...this.examResultList];
    }

}