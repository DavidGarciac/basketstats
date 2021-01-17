import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablateamsComponent } from './tablateams.component';

describe('TablateamsComponent', () => {
  let component: TablateamsComponent;
  let fixture: ComponentFixture<TablateamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablateamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablateamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
