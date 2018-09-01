import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsOperatorsComponent } from './rxjs-operator.component';

describe('MapOperatorComponent', () => {
  let component: RxjsOperatorsComponent;
  let fixture: ComponentFixture<RxjsOperatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsOperatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
