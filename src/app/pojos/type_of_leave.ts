export class TypeOfLeave{
    private typeOfLeaveId: any;
    private nameOfLeave: any;

    constructor(
        typeOfLeaveId: any,
        nameOfLeave: any){
        this.typeOfLeaveId = typeOfLeaveId;
        this.nameOfLeave = nameOfLeave;
    }

    public getTypeOfLeaveId(): any{
        return this.typeOfLeaveId;
    }

    public getNameOfLeave(): any{
        return this.nameOfLeave;
    }
}
