import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FeedetailsPage } from './feedetails.page';

describe('FeedetailsPage', () => {
  let component: FeedetailsPage;
  let fixture: ComponentFixture<FeedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FeedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
