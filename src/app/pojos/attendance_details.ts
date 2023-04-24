export class AttendanceDetails{
    attendanceStatus: any;
    date: any;

    constructor(
        attendanceStatus: any,
        date: any
    ){
        this.attendanceStatus = attendanceStatus;
        this.date = date;
    }

    // Getters
    public getAttendanceStatus(): any{
        return this.attendanceStatus;
    }

    public getDate(): any{
        return this.date;
    }
}