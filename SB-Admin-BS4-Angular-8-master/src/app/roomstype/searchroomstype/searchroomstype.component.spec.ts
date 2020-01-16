import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchroomstypeComponent } from './searchroomstype.component';

describe('SearchroomstypeComponent', () => {
  let component: SearchroomstypeComponent;
  let fixture: ComponentFixture<SearchroomstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchroomstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchroomstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
