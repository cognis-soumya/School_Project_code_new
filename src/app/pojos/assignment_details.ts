export class AssignmentDetails{
    private assignDateTime: any;
    private assignCompleteDateTime: any;
    private completionStatus: any;
    private title: any;

    constructor(
        assignDateTime: any,
        assignCompleteDateTime: any,
        completionStatus: any,
        title: any
    ){
        this.assignDateTime = assignDateTime;
        this.assignCompleteDateTime = assignCompleteDateTime;
        this.completionStatus = completionStatus;
        this.title = title;
    }

    // GETTERS
    public getAssignDateTime(): any{
        return this.assignDateTime;
    }
    public getAssignCompleteDateTime(): any{
        return this.assignCompleteDateTime;
    }
    public getCompletionStatus(): any{
        return this.completionStatus;
    }
    public getTitle(): any{
        return this.title;
    }
}