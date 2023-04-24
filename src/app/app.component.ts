import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ChildData } from './pojos/children_details';
import { DataExchangeService } from './providers/data-exchange.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  childDataArr: ChildData[] = [];
  userImageUrL: any;
  userName: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataExchangeService: DataExchangeService
  ) {
    this.initializeApp();
  }

  ionViewWillEnter(){
    this.childDataArr = this.dataExchangeService.getChildArr();
    this.userImageUrL = DataExchangeService.constUserImageURL;
    this.userName = DataExchangeService.constUserName;
    console.log('cdildAr ', this.childDataArr);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
