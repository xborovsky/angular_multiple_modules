import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Shared2Component } from './shared2.component';

describe('Shared2Component', () => {
  let component: Shared2Component;
  let fixture: ComponentFixture<Shared2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shared2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shared2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
