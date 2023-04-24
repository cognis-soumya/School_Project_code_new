import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HolidayListPage } from './holiday-list.page';

describe('HolidayListPage', () => {
  let component: HolidayListPage;
  let fixture: ComponentFixture<HolidayListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HolidayListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
