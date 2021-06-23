import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WIPBaseComponent } from './wip-base.component';

describe('WIPBaseComponent', () => {
  let component: WIPBaseComponent;
  let fixture: ComponentFixture<WIPBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WIPBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WIPBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
