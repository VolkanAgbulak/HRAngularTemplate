import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatesdetailComponent } from './candidatesdetail.component';

describe('CandidatesdetailComponent', () => {
  let component: CandidatesdetailComponent;
  let fixture: ComponentFixture<CandidatesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
