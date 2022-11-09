import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [EmployeeComponent],
  exports: [EmployeeComponent],
})
export class ContentModule {}
