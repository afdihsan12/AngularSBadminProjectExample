import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlabsratesComponent } from './searchlabsrates.component';

describe('SearchlabsratesComponent', () => {
  let component: SearchlabsratesComponent;
  let fixture: ComponentFixture<SearchlabsratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlabsratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlabsratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
