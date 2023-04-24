import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SyllabusPage } from './syllabus.page';

describe('SyllabusPage', () => {
  let component: SyllabusPage;
  let fixture: ComponentFixture<SyllabusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyllabusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SyllabusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
