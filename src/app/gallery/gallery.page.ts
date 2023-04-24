import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Gesture, GestureController, LoadingController, ModalController } from '@ionic/angular';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { SchoolData } from '../pojos/school_details';
import { GalleryDetails } from '../pojos/gallery_details';
import { GalleryCaption } from '../pojos/gallery_caption';
import { GalleryPhoto } from '../pojos/gallery_photo_details';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  localServicesService: LocalServicesService;
  // private dataExchangeService: DataExchangeService;
  data = '';
  error = '';
  schoolData: SchoolData;
  schoolId: any;
  galleryCaptionArr: GalleryCaption[] = [];
  galleryDataArr: GalleryDetails[] = [];
  gallaryAnnualFunctionArr: GalleryCaption[] = [];
  gallarySportArr: GalleryCaption[] = [];
  gallaryEthenicDay: GalleryCaption[] = [];
  galleryPhotoArrChanged = new Subject<GalleryCaption[]>();
  galleryPhotoArr: GalleryPhoto[] = [];
  galleryPhotoArrSport: GalleryPhoto[] = [];
  galleryPhotoArrAnnualFn: GalleryPhoto[] = [];
  galleryPhotoArrEthnicDay: GalleryPhoto[] = [];
  galleryPhotoArrFreshersDay: GalleryPhoto[] = [];
  galleryPhotoArrIndTrip: GalleryPhoto[] = [];
  galleryPhotoArrOther: GalleryPhoto[] = [];
  sport = 'Sport';
  annualFunction = 'Annual Function';
  ethnicDay = 'Ethinic Day';
  industrialTrip = 'Industrial Trip';
  freshersDay = 'Fresher Day';
  others = 'Other';
  @ViewChild('paragraph') p: Element;
  
  imageURL = 'http://3.17.165.248:8080/SchoolWebApp/Gallery/Images/Screenshot (3).jpg';

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };
  element: any;

  

  constructor(private modalController: ModalController,
              private router: Router,
              private http: HttpClient,
              public loadingControler: LoadingController,
              private dataExchangeService: DataExchangeService,
              private gestureCtrl: GestureController) {
                this.data = '',
                this.error = '',
                this.localServicesService = new LocalServicesService(this.http);
               
  }

  async openPreview(photo){
    this.galleryPhotoArrSport = [];
    this.dataExchangeService.setCurrentGalleryPhoto(photo);
    const modal = await this.modalController.create({
      component: ImageModalComponent
    });
    await modal.present();

  //   this.modalController.create({
  //   component: ImageModalComponent,
  //   componentProps: {
  //     imageURL: imageURL
  //  }}).then(model => model.present());
      
  }

  ngOnInit() {
    // const gesture: Gesture = this.gestureCtrl.create({
    //   el: this.element.nativeElement,
    //   threshold: 15,
    //   gestureName: 'my-gesture',
    //   onMove: ev => this.onMove(ev)
    // }, true);
    // gesture.enable();
  }

  private onMove(detail) {
    const type = detail.type;
    const currentX = detail.currentX;
    const deltaX = detail.deltaX;
    const velocityX = detail.velocityX;
  
    this.p.innerHTML = `
      <div>Type: ${type}</div>
      <div>Current X: ${currentX}</div>
      <div>Delta X: ${deltaX}</div>
      <div>Velocity X: ${velocityX}</div>
    `
  }
  
  //   this.p.innerHTML = `
  //     <div>
  //       <img [src]=${this.imageURL}>
  //     </div>
  //   `
  // }

  ionViewWillEnter() {
    this.galleryPhotoArr = [];
    this.schoolData = this.dataExchangeService.getSchoolData();
    this.schoolId = this.schoolData.getSchoolId();
    console.log('schoolId', this.schoolId);
    this.getGalleryType(this.localServicesService.galleryMaster, this.schoolId);
  }
  // Getting Gallery data cal
  async getGalleryType(url: any, schoolId: any){
    const loading = await this.loadingControler.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 4000
    });
    await loading.present();
    this.localServicesService.getGalleryMasters(url, schoolId).subscribe(
        (resData: Response) => {
          let parsed = JSON.parse(JSON.stringify(resData));
          // parsed.childList
          this.data = JSON.stringify(resData);
          console.log('childInfo', parsed.typeOfListgallery);
          JSON.parse(this.data, async (key, value) => {
            if (typeof key === 'string'){
              // console.log('Userdata : ', key);
              if (key.toString() === 'typeOfListgallery'){
                this.dataExchangeService.galleryCaptionArr = [];
                this.galleryCaptionArr = [];
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < parsed.typeOfListgallery.length; i++){
                  this.dataExchangeService.storeGalleryCaption(new GalleryCaption(
                    parsed.typeOfListgallery[i].galleryTypeId,
                    parsed.typeOfListgallery[i].caption
                    ));
                }
                this.galleryCaptionArr = this.dataExchangeService.getGalleryCaption();
                this.getGalleryPhotos(this.localServicesService.galleryURL, this.schoolId);
                await loading.onDidDismiss();
              }
            }
          });
        },
        async err => {
          await loading.onDidDismiss();
          this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
        }
      );
    console.log('error', this.error);
  }

  // Calling Gallery photo data
  public getGalleryPhotos(url: any, schoolId: any){
    this.localServicesService.getGalleryData(url, schoolId).subscribe((resData: Response) => {
      let parsed = JSON.parse(JSON.stringify(resData));
      // parsed.childList
      this.data = JSON.stringify(resData);
      console.log('Gallery Link', parsed.galleryLinks);
      JSON.parse(this.data, (key, value) => {
         if (typeof key === 'string'){
            if (key.toString() === 'galleryLinks'){
              this.dataExchangeService.galleryPhotoArr = [];
              this.galleryPhotoArr = [];
                // tslint:disable-next-line: prefer-for-of
              for (let i = 0 ; i < parsed.galleryLinks.length; i++){
                    this.dataExchangeService.storeGalleryPhoto(new GalleryPhoto(
                      parsed.galleryLinks[i].url,
                      parsed.galleryLinks[i].type,
                      parsed.galleryLinks[i].galleryTypeId,
                      parsed.galleryLinks[i].caption,
                      parsed.galleryLinks[i].date
                    ));
                }
            }
         }
         this.galleryPhotoArr = this.dataExchangeService.getGalleryPhoto();
      });
    },
    err => {
      this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
    });
  }

  goBack() {
    history.back();
  }

  // Getting separated value for all the elements
  private gettingDiffrentCaption(caption: any, galleryPhotoArr: GalleryPhoto[]): any{
    // console.log('cCap', caption);
    let galleryPhotoArrChanged = new Subject<GalleryPhoto[]>();
    galleryPhotoArr = [];
    for(let i = 0; i<this.galleryPhotoArr.length; i++){
        if (this.galleryPhotoArr[i].getCaption() === caption){
          // console.log('lCap', this.galleryPhotoArr[i].getCaption());
          galleryPhotoArr.push(this.galleryPhotoArr[i]);
            galleryPhotoArrChanged.next(galleryPhotoArr);
        }
    }
    return galleryPhotoArr;
  }

}
