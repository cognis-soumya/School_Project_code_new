import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { DataExchangeService } from '../providers/data-exchange.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  showPassword = false;
  passwordToggleIcon = 'eye';
  private data: string;
  private error: string;
  phone: string = '';
  password: string = '';
  private localServicesService: LocalServicesService;

  constructor(private router: Router,
              private http: HttpClient,
              private dataExchangeService: DataExchangeService
              ) {
    this.data = '';
    this.error = '';
    this.localServicesService = new LocalServicesService(this.http);
    this.dataExchangeService = new DataExchangeService();
  }

  ngOnInit(){
  }

  // This a method where are creating model
  ionViewWillEnter() {
  }
  // For Login page
  login(){
    debugger;
    // DataExchangeService.constUserId = '54';
    // tslint:disable-next-line: no-unused-expression
    // this.router.navigate(['/child-list']);
    this.localServicesService.getLoginDataReq(
      this.localServicesService.loginUrl,
      this.phone,
      this.password
    ).subscribe(
      resData => {
        this.data = JSON.stringify(resData);
        let parsed = JSON.parse(JSON.stringify(resData));
        JSON.parse(this.data, (key, value) => {
          if (typeof key === 'string'){
            if (key.toString() === 'userId'){
              DataExchangeService.constUserId = value.toString();
              DataExchangeService.constUserImageURL = parsed.loginDetails.imageUrl;
              DataExchangeService.constUserName = parsed.loginDetails.firstName;
              console.log('Image : ', parsed.loginDetails.imageUrl);
              this.dataExchangeService.setUserId(value.toString());
              console.log('UserID : ', this.dataExchangeService.getUserId());
              // tslint:disable-next-line: triple-equals
              if (this.dataExchangeService.getUserId() > 0) {
                this.router.navigate(['/child-list']);
              }
            }
          }
        });
      },
      err => {
        this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
      }
    );
    console.log('error', this.error);
  }
  // For Sign Up page
  signup(){
    // this.router.navigate(['/signup']);
  }
  togglePassWord(): void {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'eye'){
      this.passwordToggleIcon = 'eye-off';
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }
}
