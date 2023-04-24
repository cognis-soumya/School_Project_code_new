import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamschedulePage } from './examschedule.page';

describe('ExamschedulePage', () => {
  let component: ExamschedulePage;
  let fixture: ComponentFixture<ExamschedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamschedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamschedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
