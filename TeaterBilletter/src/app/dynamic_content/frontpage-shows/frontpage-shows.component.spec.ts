import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageShowsComponent } from './frontpage-shows.component';

describe('FrontpageShowsComponent', () => {
  let component: FrontpageShowsComponent;
  let fixture: ComponentFixture<FrontpageShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontpageShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
