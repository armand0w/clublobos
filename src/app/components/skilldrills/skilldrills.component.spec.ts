import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilldrillsComponent } from './skilldrills.component';

describe('SkilldrillsComponent', () => {
  let component: SkilldrillsComponent;
  let fixture: ComponentFixture<SkilldrillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkilldrillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkilldrillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
