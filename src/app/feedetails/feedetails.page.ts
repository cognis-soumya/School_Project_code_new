import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { MonthlyFee } from '../pojos/monthly_fee';
import { FeeDetails } from '../pojos/fee_details';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-feedetails',
  templateUrl: './feedetails.page.html',
  styleUrls: ['./feedetails.page.scss'],
})
export class FeedetailsPage implements OnInit {
  childDataArr: ChildData[] = [];
  localServicesService: LocalServicesService;
  error: any;
  data: any;
  feeDetails: FeeDetails;
  childId: any;
  monthId: any;

  childName: any;
  paidAmount = '';
  dueAmount = '';
  finalDate = '';
  tutionFee = '';
  transportFee = '';
  registrationFee = '';
  sportFee = '';
  examFee = '';
  tourFee = '';
  miscelenious = '';
  // tslint:disable-next-line: ban-types
  totalFee: Number = 0.0;
  childData: ChildData;
  masterFeeList: MonthlyFee[] = [];
  masterFeeListChanged = new Subject<MonthlyFee[]>();



  months = [
    {
      noOfMonth: 1,
      monthName: 'January'
    },
    {
      noOfMonth: 2,
      monthName: 'February'
    },
    {
      noOfMonth: 3,
      monthName: 'March'
    },
    {
      noOfMonth: 4,
      monthName: 'April'
    },
    {
      noOfMonth: 5,
      monthName: 'May'
    },
    {
      noOfMonth: 6,
      monthName: 'June'
    },
    {
      noOfMonth: 7,
      monthName: 'July'
    },
    {
      noOfMonth: 8,
      monthName: 'August'
    },
    {
      noOfMonth: 9,
      monthName: 'September'
    },
    {
      noOfMonth: 10,
      monthName: 'October'
    },
    {
      noOfMonth: 11,
      monthName: 'November'
    },
    {
      noOfMonth: 12,
      monthName: 'December'
    }
  ];

  constructor(
    private router: Router,
    private http: HttpClient,
    private dataExchangeService: DataExchangeService) {
      this.data = '',
      this.error = '',
      this.localServicesService = new LocalServicesService(this.http);
  }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.childDataArr = this.dataExchangeService.getChildArr();
    this.childData = this.dataExchangeService.getChildData();
    this.childName = this.childData.getStudentName();
    this.childId = this.childData.getStudentId();
    this.getFeeDetails();
  }

  goBack() {
    history.back();
  }
  // Getting Fee details Call
  async getFeeDetails(){
    this.localServicesService.getFeeDetails(
      this.localServicesService.feeDetails,
        this.childId, // std Id
       
    ).subscribe((resData: Response) => {
      let parsed = JSON.parse(JSON.stringify(resData));
      this.data = JSON.stringify(resData);
      console.log('Fee Datails', this.data); // allFeeDetails

      JSON.parse(this.data, (key, value) => {
        if (typeof key === 'string'){
          if (key.toString() === 'allFeeDetails'){
            //  for(let i = 0; i < parsed.allFeeDetails.length; i++){
                 this.masterFeeList = [];
                 for(let j=0; j < parsed.allFeeDetails[0].masterFeeList.length;j++){
                  this.masterFeeList.push(new MonthlyFee(
                    parsed.allFeeDetails[0].masterFeeList[j].value,
                    parsed.allFeeDetails[0].masterFeeList[j].nameOfFee,
                    parsed.allFeeDetails[0].masterFeeList[j].amountOfFee
                  ));
                  this.masterFeeListChanged.next(this.masterFeeList);
                 }
                 this.dataExchangeService.storeFeeDetails(new FeeDetails(
                  parsed.allFeeDetails[0].totalAmount,
                  parsed.allFeeDetails[0].paidAmount,
                  parsed.allFeeDetails[0].dueAmout,
                  parsed.allFeeDetails[0].paymentFinalDate,
                  this.masterFeeList
                 ));
                 this.feeDetails = this.dataExchangeService.getFeeDetails();
                 this.masterFeeList = this.feeDetails.getMasterFeeList();
                 this.totalFee = this.feeDetails.getTotalAmount();
                 this.paidAmount = this.feeDetails.getPaidAmount();
                 this.dueAmount = this.feeDetails.getDueAmount();
                 this.finalDate = this.feeDetails.getPaymentFinalDate();
                 console.log('Fee Datails', this.feeDetails);
            //  }
          }
        }
      });


      // JSON.parse(this.data, (key, value) => {
      //   if (typeof key === 'string'){
      //     if (key.toString() === 'monthlyfee'){
      //         this.totalFee = Number(parsed.monthlyfee[0].tutionFee) +
      //                         Number(parsed.monthlyfee[0].tranportationFee) +
      //                         Number(parsed.monthlyfee[0].registrationFee) +
      //                         Number(parsed.monthlyfee[0].sportsFee) +
      //                         Number(parsed.monthlyfee[0].examFee) +
      //                         Number(parsed.monthlyfee[0].tourFee) +
      //                         Number(parsed.monthlyfee[0].miscellaneous);
      //         let fee = new MonthlyFee(
      //           parsed.monthlyfee[0].tutionFee,
      //           parsed.monthlyfee[0].tranportationFee,
      //           parsed.monthlyfee[0].registrationFee,
      //           parsed.monthlyfee[0].sportsFee,
      //           parsed.monthlyfee[0].examFee,
      //           parsed.monthlyfee[0].tourFee,
      //           parsed.monthlyfee[0].miscellaneous
      //         );
      //         this.dataExchangeService.storeFeeDetails(
      //           new FeeDetails(
      //             parsed.paidAmount,
      //             parsed.dueAmout,
      //             parsed.paymentFinalDate,
      //             fee
      //           )
      //         );
      //         this.feeDetails = this.dataExchangeService.getFeeDetails();
      //         this.paidAmount = this.feeDetails.getPaidAmount();
      //         this.dueAmount = this.feeDetails.getDueAmount();
      //         this.finalDate = this.feeDetails.getPaymentFinalDate();
      //         this.tutionFee = this.feeDetails.getMonthlyFee().getTutionFee();
      //         this.transportFee = this.feeDetails.getMonthlyFee().getTransportationFee();
      //         this.registrationFee = this.feeDetails.getMonthlyFee().getRegistrationFee();
      //         this.sportFee = this.feeDetails.getMonthlyFee().getSportsFee();
      //         this.examFee = this.feeDetails.getMonthlyFee().getExamFee();
      //         this.tourFee = this.feeDetails.getMonthlyFee().getTourFee();
      //         this.miscelenious = this.feeDetails.getMonthlyFee().getMiscellaneous();
      //         console.log('Fee Datails', this.feeDetails);
      //       }
      //   }
      // });

    },
       err => {
         // tslint:disable-next-line: no-unused-expression
         this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
       }
    );
  }

  // Selecting Child
  async selectChild(event: any){
    for(let i = 0; i < this.childDataArr.length; i++){
      if (event.target.value === this.childDataArr[i].getStudentName()){
        this.childId = this.childDataArr[i].getStudentId();
      }
    }
  }

  // Selecting Month
  async selectMonth(event: any){
    for(let i = 0; i < this.months.length; i++){
      if (event.target.value === this.months[i].monthName){
          this.monthId = this.months[i].noOfMonth;
          this.getFeeDetails();
          break;
      }
    }
  }
}
