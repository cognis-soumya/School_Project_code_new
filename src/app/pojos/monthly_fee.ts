export class MonthlyFee{

    value: any;
    nameOfFee: any;
    amountOfFee: any;

    constructor(
        value: any,
        nameOfFee: any,
        amountOfFee: any
    ){
        this.value = value;
        this.nameOfFee = nameOfFee;
        this.amountOfFee = amountOfFee;
    }

    // Getters
    public getValue(): any{
        return this.value;
    }

    public getNameOfFee(): any{
        return this.nameOfFee;
    }

    public getAmountOfFee(): any{
        return this.amountOfFee;
    }
    // tutionFee: any;
    // tranportationFee: any;
    // registrationFee: any;
    // sportsFee: any;
    // examFee: any;
    // tourFee: any;
    // miscellaneous: any;

    // constructor(
    //     tutionFee: any,
    //     tranportationFee: any,
    //     registrationFee: any,
    //     sportsFee: any,
    //     examFee: any,
    //     tourFee: any,
    //     miscellaneous: any
    // ){
    //     this.tutionFee = tutionFee;
    //     this.tranportationFee = tranportationFee;
    //     this.registrationFee = registrationFee;
    //     this.sportsFee = sportsFee;
    //     this.examFee = examFee;
    //     this.tourFee = tourFee;
    //     this.miscellaneous = miscellaneous;
    // }

    // // Getters
    // public getTutionFee(): any{
    //     return this.tutionFee;
    // }
    // public getTransportationFee(): any{
    //     return this.tranportationFee;
    // }
    // public getRegistrationFee(): any{
    //     return this.registrationFee;
    // }
    // public getSportsFee(): any{
    //     return this.sportsFee;
    // }
    // public getExamFee(): any{
    //     return this.examFee;
    // }
    // public getTourFee(): any{
    //     return this.tourFee;
    // }
    // public getMiscellaneous(): any{
    //     return this.miscellaneous;
    // }
}