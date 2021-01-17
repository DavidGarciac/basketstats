import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaplayerComponent } from './tablaplayer.component';

describe('TablaplayerComponent', () => {
  let component: TablaplayerComponent;
  let fixture: ComponentFixture<TablaplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
