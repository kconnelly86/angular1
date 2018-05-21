import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksDetailComponent } from './trucks-detail.component';

describe('TrucksDetailComponent', () => {
  let component: TrucksDetailComponent;
  let fixture: ComponentFixture<TrucksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrucksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrucksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
