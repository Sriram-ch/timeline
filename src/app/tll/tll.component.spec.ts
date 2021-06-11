import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TllComponent } from './tll.component';

describe('TllComponent', () => {
  let component: TllComponent;
  let fixture: ComponentFixture<TllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
