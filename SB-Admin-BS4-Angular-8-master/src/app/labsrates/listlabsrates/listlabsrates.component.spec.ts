import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlabsratesComponent } from './listlabsrates.component';

describe('ListlabsratesComponent', () => {
  let component: ListlabsratesComponent;
  let fixture: ComponentFixture<ListlabsratesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlabsratesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlabsratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
