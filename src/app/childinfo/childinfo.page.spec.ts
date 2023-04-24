import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildinfoPage } from './childinfo.page';

describe('ChildinfoPage', () => {
  let component: ChildinfoPage;
  let fixture: ComponentFixture<ChildinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
