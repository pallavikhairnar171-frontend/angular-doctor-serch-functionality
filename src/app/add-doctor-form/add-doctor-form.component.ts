import { Component } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor.model';
import { Department } from '../models/department.model';


@Component({
  selector: 'app-add-doctor-form',
  templateUrl: './add-doctor-form.component.html',
  styleUrls: ['./add-doctor-form.component.css']
})
export class AddDoctorFormComponent {
  doctorName = '';
  department = '';
  doctors: Doctor[] = [];

departments: Department [] = [];
filteredDepartments: Department[] = [];

  constructor(private doctorService:DoctorService) {}

  ngOnInit(): void {
    this.getAllDoctors();
    
  }

  getAllDoctors() {
  this.doctorService.getDoctors().subscribe((res: Department[]) => {
    this.departments = res;
    this.filteredDepartments = res;
  });
}

 searchDoctor() {
  console.log(this.doctorName)
  this.filteredDepartments = this.departments.map((dept:Department) => {
    const filteredDocs = dept.doctors.filter((doc: Doctor) => {
      const nameMatch = this.doctorName ? doc.name.toLowerCase().includes(this.doctorName.toLowerCase()) : true;
      const deptMatch = this.department ? dept.name === this.department : true;
      return nameMatch && deptMatch;
    });

    return {
      ...dept,
      doctors: filteredDocs
    };
  }).filter(dept => dept.doctors.length > 0);
}
}
