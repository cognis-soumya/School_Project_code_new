export class HolidayData{
    private holidayId: any;
    private nameOfHoliday: any;
    private fromDate: any;
    private toDate: any;

    constructor(
        holidayId: any,
        nameOfHoliday: any,
        fromDate: any,
        toDate: any){
     this.holidayId = holidayId;
     this.nameOfHoliday = nameOfHoliday;
     this.fromDate = fromDate;
     this.toDate = toDate;
    }

    // GETTERS
    public getHolidayId(): any{
        return this.holidayId;
    }
    public getNameOfHoliday(): any{
        return this.nameOfHoliday;
    }
    public getHolidayDatefromDate(): any{
        return this.fromDate;
    }
    public getHolidaytoDate(): any{
        return this.toDate;
    }
}
