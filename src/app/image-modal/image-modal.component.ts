import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonContent } from '@ionic/angular';
import { GalleryPhoto } from '../pojos/gallery_photo_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Gesture, GestureController } from '@ionic/angular';



@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {
  imageURL: any;
  img: any;
  date: any;
  element: ElementRef;
  // @ViewChild('slider', {read: ElementRef})slider: ElementRef;
  // @ViewChild('rectangle') element: ElementRef;
  galleryphotoArr: GalleryPhoto[] = [];
  poss = 0;
  galleryPhoto: GalleryPhoto;

  sliderOpts = {
    zoom: {
      maxRatio: 5
    }
  };

  constructor(private navParams: NavParams,
              private modalController: ModalController,
              private dataExchangeService: DataExchangeService,
              private gestureCtrl: GestureController) {
                // const gesture: Gesture = this.gestureCtrl.create({
                //   el: this.element.nativeElement,
                //   threshold: 15,
                //   gestureName: 'my-gesture',
                //   onMove: detail => this.onMove(detail)
                // }, true);
              }

  ngOnInit() {
    // this.img = this.navParams.get('img');
  
  }
  // zoom(zoomIn: boolean){
  //   let zoom = this.slider.nativeElement.swiper.zoom;
  //   if (zoomIn){
  //     zoom.in();
  //   } else{
  //     zoom.out();
  //   }
  // }
  close(){
    this.modalController.dismiss();
  }
  goBack() {
    history.back();
  }

  ionViewWillEnter() {
    this.galleryphotoArr = this.dataExchangeService.getGalleryPhoto();
    this.galleryPhoto = this.dataExchangeService.getCurrentGalleryPhoto();
    console.log('data: ', this.galleryPhoto);
    // this.galleryphotoArr = this.dataExchangeService.getGalleryPhoto();
    // this.galleryPhoto = this.dataExchangeService.getCurrentGalleryPhoto();
    this.imageURL = this.galleryPhoto.getUrl();
    for (let i = 0; i < this.galleryphotoArr.length; i++){
      if (this.galleryphotoArr[i].getUrl() === this.galleryPhoto.getUrl()){
         this.poss = i;
         this.date = this.galleryphotoArr[this.poss].getDate();
        //  console.log('date: ', this.date);
      }
    }
  }


  slidePrev(poss){
    if (poss === 0){
        this.poss = this.galleryphotoArr.length;
        this.date = this.galleryphotoArr[this.poss].getDate();
    }else{
      this.poss = poss - 1;
      this.date = this.galleryphotoArr[this.poss].getDate();
    }
    this.date = this.galleryphotoArr[this.poss].getDate();
    this.imageURL = this.galleryphotoArr[this.poss].getUrl();
    console.log('dateP: ', this.date);
  }

  slideNext(poss){
    if (poss === this.galleryphotoArr.length){
      this.date = this.galleryphotoArr[this.poss].getDate();
      this.poss = poss - 1;
    }else{
      this.date = this.galleryphotoArr[this.poss].getDate();
      this.poss = poss + 1;
    }
    this.date = this.galleryphotoArr[this.poss].getDate();
    this.imageURL = this.galleryphotoArr[this.poss].getUrl();
    console.log('dateN: ', this.date);
  }

  slideChanged(poss){
    if(this.poss === poss){
      this.poss++;
      this.date = this.galleryphotoArr[this.poss].getDate();
      this.imageURL = this.galleryphotoArr[this.poss].getUrl();
    }
    this.poss++;
      this.date = this.galleryphotoArr[this.poss].getDate();
      this.imageURL = this.galleryphotoArr[this.poss].getUrl();
  }
}
