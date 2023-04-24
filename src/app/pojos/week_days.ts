export class WeekDays{
    dayId: any;
    dayName: any;

    constructor(
        dayId: any,
        dayName: any
    ){
        this.dayId = dayId;
        this.dayName = dayName;
    }

    public getDayId(): any{
        return this.dayId;
    }
    public getDayName(): any{
        return this.dayName;
    }
}