import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListemptypeComponent } from './listemptype.component';

describe('ListemptypeComponent', () => {
  let component: ListemptypeComponent;
  let fixture: ComponentFixture<ListemptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListemptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListemptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
