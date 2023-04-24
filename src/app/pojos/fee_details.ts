import { MonthlyFee } from './monthly_fee';
import { Subject } from 'rxjs';
export class FeeDetails{
    totalAmount: any;
    paidAmount: any;
    dueAmout: any;
    paymentFinalDate: any;
    masterFeeList : MonthlyFee[] = [];
    masterFeeListChanged = new Subject<MonthlyFee[]>();

    constructor(
        totalAmount: any,
        paidAmount: any,
        dueAmout: any,
        paymentFinalDate: any,
        masterFeeList: MonthlyFee[]
    ){
        this.totalAmount = totalAmount;
        this.paidAmount = paidAmount;
        this.dueAmout = dueAmout;
        this.paymentFinalDate = paymentFinalDate;
        this.masterFeeList = masterFeeList;
        this.masterFeeListChanged.next(this.masterFeeList);
    }

    // Getters
    public getTotalAmount(): any{
        return this.totalAmount;
    }

    public getPaidAmount(): any{
        return this.paidAmount;
    }
    public getDueAmount(): any{
        return this.dueAmout;
    }
    public getPaymentFinalDate(): any{
        return this.paymentFinalDate;
    }
    // this.masterFeeList
    public getMasterFeeList(): any{
        this.masterFeeListChanged.next(this.masterFeeList);
        return [...this.masterFeeList];
    }
}