import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateprofilePage } from './createprofile.page';

describe('CreateprofilePage', () => {
  let component: CreateprofilePage;
  let fixture: ComponentFixture<CreateprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
