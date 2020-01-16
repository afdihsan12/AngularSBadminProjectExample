import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlabsComponent } from './searchlabs.component';

describe('SearchlabsComponent', () => {
  let component: SearchlabsComponent;
  let fixture: ComponentFixture<SearchlabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
