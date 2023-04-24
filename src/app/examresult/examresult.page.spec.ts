import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamresultPage } from './examresult.page';

describe('ExamresultPage', () => {
  let component: ExamresultPage;
  let fixture: ComponentFixture<ExamresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
