import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GimnasiaComponent } from './gimnasia.component';

describe('GimnasiaComponent', () => {
  let component: GimnasiaComponent;
  let fixture: ComponentFixture<GimnasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GimnasiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GimnasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
