import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendimgComponent } from './sendimg.component';

describe('SendimgComponent', () => {
  let component: SendimgComponent;
  let fixture: ComponentFixture<SendimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
