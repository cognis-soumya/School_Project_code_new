import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DataExchangeService } from '../providers/data-exchange.service';
import { ChildData } from '../pojos/children_details';
@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  childDataArr: ChildData[] = [];
  // child: any;
  constructor(private popCtrl: PopoverController,
    private dataExchangeService: DataExchangeService) { 
      this.childDataArr = this.dataExchangeService.getChildArr();
      // this.child = this.childDataArr[0];
  }

  ngOnInit() {}

  ionViewWillEnter(){
    this.childDataArr = this.dataExchangeService.getChildArr();
    console.log(this.childDataArr);
  }
  dismiss(item:string){
    //  console.log(item);
     this.popCtrl.dismiss({
       "fromPopover":item
     });
  }

}
