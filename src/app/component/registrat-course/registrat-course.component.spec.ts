import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratCourseComponent } from './registrat-course.component';

describe('RegistratCourseComponent', () => {
  let component: RegistratCourseComponent;
  let fixture: ComponentFixture<RegistratCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistratCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistratCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
