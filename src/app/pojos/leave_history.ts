export class LeaveHistory{
    private typeOfLeavesId: any;
    private startDate: any;
    private endDate: any;
    private totalDays: any;
    private reason: any;
    private typeOfLeave: any;
    private leaveStatus: any;
    private leaveId: any;

    constructor(
        typeOfLeavesId: any,
        startDate: any,
        endDate: any,
        totalDays: any,
        reason: any,
        typeOfLeave: any,
        leaveStatus: any,
        leaveId: any
    ){
        this.typeOfLeavesId = typeOfLeavesId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.totalDays = totalDays;
        this.reason = reason;
        this.typeOfLeave = typeOfLeave;
        this.leaveStatus = leaveStatus;
        this.leaveId = leaveId;
    }

    // SETTERS
    public setLeaveStatus(leaveStatus: any){
        this.leaveStatus = leaveStatus;
    }

    // GETTERS
    public getTypeOfLeavesId(): any{
        return this.typeOfLeavesId;
    }

    public getStartDate(): any{
        return this.startDate;
    }

    public getEndDate(): any{
        return this.endDate;
    }

    public getTotalDays(): any{
        return this.totalDays;
    }

    public getReason(): any{
        return this.reason;
    }

    public getTypeOfLeave(): any{
        return this.typeOfLeave;
    }

    public getLeaveStatus(): any{
        return this.leaveStatus;
    }

    public getLeaveId(): any{
        return this.leaveId;
    }


}