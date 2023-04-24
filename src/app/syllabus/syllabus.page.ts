import { Component, OnInit } from '@angular/core';
import { ChildData } from '../pojos/children_details';
import { DataExchangeService } from '../providers/data-exchange.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LocalServicesService } from '../providers/local-services.service';
import { SyllabusDetails } from '../pojos/syllabus';
import { SchoolData } from '../pojos/school_details';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.page.html',
  styleUrls: ['./syllabus.page.scss'],
})
export class SyllabusPage implements OnInit {
  childDataArr: ChildData[] = [];
  syllabusDetailsArr: SyllabusDetails[] = [];
  localServicesService: LocalServicesService;
  // private dataExchangeService: DataExchangeService;
  data = '';
  error = '';
  childId: any;
  schoolData: SchoolData;
  classId: any;
  childData: ChildData;
  childName: any;
  schoolId = '1';


  constructor(
    private router: Router,
    private http: HttpClient,
    private dataExchangeService: DataExchangeService,
    public loadingControler: LoadingController,
    private file: File,
    private fileOpener: FileOpener) {
    this.data = '';
    this.error = '';
    this.localServicesService = new LocalServicesService(this.http);
  }

  ngOnInit() {

  }

  goBack() {
    history.back();
  }

  // This a method where are creating model
  ionViewWillEnter() {
    this.childData = this.dataExchangeService.getChildData();
    this.childId = this.childData.getStudentId();
    this.classId = this.childData.getClassId();
    this.childName = this.childData.getStudentName();
    // this.childDataArr = this.dataExchangeService.getChildArr();
    this.schoolData = this.dataExchangeService.getSchoolData();
    this.getSyllabusDetails();
  }

  // Selection Child
  // selectChild(event: any){
  //   for (let i = 0; i < this.childDataArr.length; i++){
  //     if (event.target.value === this.childDataArr[i].getStudentName()){
  //         this.childId = this.childDataArr[i].getStudentId();
  //         this.getSyllabusDetails();
  //         break;
  //     }
  //   }
  // }

  // Getting Syllabus call
  async getSyllabusDetails(){
    debugger;
    const loading = await this.loadingControler.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 5000
    });
    await loading.present();
    this.localServicesService.getSyllabusDataStudent(
      this.localServicesService.syllabusDetailsStudent,
      this.childId
     // this.schoolId
    ).subscribe((resData: Response) => {
      const parsed = JSON.parse(JSON.stringify(resData));
      this.data = JSON.stringify(resData);
      console.log('Data', this.data);
      this.dataExchangeService.syllabusDetailsArr = [];
      this.syllabusDetailsArr = [];
      JSON.parse(this.data, async (key, value) => {
        if (typeof key === 'string'){
            if (key === 'syllabusModel'){
                for (let i = 0; i < parsed.syllabusModel.length; i++){
                  this.dataExchangeService.storeSyllabusDetails(new SyllabusDetails(
                    parsed.syllabusModel[i].subjectId,
                    parsed.syllabusModel[i].subjectName,
                    parsed.syllabusModel[i].syllabusFile
                  ));

                  // console.log('ByteArr',  parsed.syllabusModel[i].syllabusFile);
                }
                this.syllabusDetailsArr = this.dataExchangeService.getSyllabusDetails();
                await loading.onDidDismiss();
            }
        }
      });
      console.log("subject syllabus downlaod",this.syllabusDetailsArr);
    },
    async err => {
      await loading.onDidDismiss();
      this.error = 'An error occurred,  Status:' + err.status, + ' Message:' + err.statusText;
    });
  }


  
  

  downloadPdf(base64String: any, fileName: any) {
    debugger;
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.pdf`
    link.click();
  }



  async getPDF(byteArr, fileName){
    const writeDirectory = this.file.externalDataDirectory;
    this.file.writeFile(writeDirectory, fileName, this.convertBase64ToBlob(byteArr, 'data:application/pdf;base64'), {replace: true});
    this.fileOpener.open(writeDirectory + fileName, 'application/pdf');
    // androidx.core.content.FileProvider
    // .then(() => {
    //     this.fileOpener.open(writeDirectory + fileName, 'application/pdf')
    //         .catch(() => {
    //             console.log('Error opening pdf file');
    //         });
    // })
    // .catch(() => {
    //     console.error('Error writing pdf file');
    // });
  }

  convertBase64ToBlob(b64Data, contentType): Blob {
    contentType = contentType || '';
    const sliceSize = 512;
    b64Data = b64Data.replace(/^[^,]+,/, '');
    b64Data = b64Data.replace(/\s/g, '');
    const byteCharacters = window.atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
         const slice = byteCharacters.slice(offset, offset + sliceSize);
         const byteNumbers = new Array(slice.length);
         for (let i = 0; i < slice.length; i++) {
             byteNumbers[i] = slice.charCodeAt(i);
         }
         const byteArray = new Uint8Array(byteNumbers);
         byteArrays.push(byteArray);
    }
    return new Blob(byteArrays, {type: contentType});
  }
}
