import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyClassSchedulePage } from './daily-class-schedule.page';

describe('DailyClassSchedulePage', () => {
  let component: DailyClassSchedulePage;
  let fixture: ComponentFixture<DailyClassSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyClassSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyClassSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
