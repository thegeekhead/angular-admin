import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [NavbarComponent, EmployeeComponent],
  exports: [NavbarComponent, EmployeeComponent],
})
export class ContentModule {}
