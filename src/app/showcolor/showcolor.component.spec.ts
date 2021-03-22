import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcolorComponent } from './showcolor.component';

describe('ShowcolorComponent', () => {
  let component: ShowcolorComponent;
  let fixture: ComponentFixture<ShowcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
