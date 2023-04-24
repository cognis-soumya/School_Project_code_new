import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildAttendancePage } from './child-attendance.page';

describe('ChildAttendancePage', () => {
  let component: ChildAttendancePage;
  let fixture: ComponentFixture<ChildAttendancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAttendancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
