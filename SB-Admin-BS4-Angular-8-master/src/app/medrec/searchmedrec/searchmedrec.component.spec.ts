import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmedrecComponent } from './searchmedrec.component';

describe('SearchmedrecComponent', () => {
  let component: SearchmedrecComponent;
  let fixture: ComponentFixture<SearchmedrecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmedrecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmedrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
