import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorFormComponent } from './add-doctor-form.component';

describe('AddDoctorFormComponent', () => {
  let component: AddDoctorFormComponent;
  let fixture: ComponentFixture<AddDoctorFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDoctorFormComponent]
    });
    fixture = TestBed.createComponent(AddDoctorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
