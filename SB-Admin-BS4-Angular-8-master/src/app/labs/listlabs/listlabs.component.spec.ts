import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlabsComponent } from './listlabs.component';

describe('ListlabsComponent', () => {
  let component: ListlabsComponent;
  let fixture: ComponentFixture<ListlabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
