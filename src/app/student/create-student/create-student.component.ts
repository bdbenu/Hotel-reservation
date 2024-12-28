import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { StudentService } from 'src/app/service/student.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit{
student :Student = new Student(); 
  constructor(private service :StudentService){

  }

  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }

  onSubmit(){
    this.regsiterStudent()
    console.log(this.student);
  }

  regsiterStudent(){
    
this.service.registerStudent(this.student).subscribe(data=>{
  console.log(data);
},error =>console.log(error))
  }

}
