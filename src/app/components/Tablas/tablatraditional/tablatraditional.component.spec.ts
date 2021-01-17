import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablatraditionalComponent } from './tablatraditional.component';

describe('TablatraditionalComponent', () => {
  let component: TablatraditionalComponent;
  let fixture: ComponentFixture<TablatraditionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablatraditionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablatraditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
