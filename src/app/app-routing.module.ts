import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { CreateStudentComponent } from './student/create-student/create-student.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';

const routes: Routes = [
 {path:'', component:StudentListComponent},
 {path:'register', component:CreateStudentComponent},
 {path:'edit', component:StudentEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
