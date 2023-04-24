import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChildListPage } from './child-list.page';

describe('ChildListPage', () => {
  let component: ChildListPage;
  let fixture: ComponentFixture<ChildListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChildListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
