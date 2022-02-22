import {Component, OnDestroy, OnInit} from '@angular/core';
import {map, reduce} from 'rxjs/operators';

import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {MatDialog} from '@angular/material/dialog';
import {ModifyEmployeeComponent} from '../modify-employee/modify-employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  private subscriptions = [];

  employees: Employee[] = [];
  errorMessage: string;

  constructor(private employeeService: EmployeeService, private matDialog: MatDialog) {
  }

  //get employees data
  ngOnInit(): void {
    this.subscriptions.push(
      this.employeeService.getAll().pipe(
          reduce((emps, ele: Employee) => emps.concat(ele), []),
          map(emps => this.employees = emps)
        ).subscribe());
  }

  // Unsubscribe from subscriptions
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private handleError(e: Error | any): string {
    console.error(e);
    return this.errorMessage = e.message || 'Unable to get information';
  }

  //Dialog
  updEmployee(event) {
    const dialogRef = this.matDialog.open(ModifyEmployeeComponent, {
      data: event
    });

    dialogRef.afterClosed().subscribe(
      result => {
        this.handleUpdResult(result, event);
      });
  }

 //Deal with dialog results
 private handleUpdResult(result, event) {
  // Delete
  if (event.del) {
    this.subscriptions.push(
      this.employeeService.remove(event.emp).subscribe(
        () => console.log(`Deleted Employee ${event.emp.id}`)
      ));
  } else {
  // Update information
    this.subscriptions.push(this.employeeService.save(result.data).subscribe(
      emp => console.log(`Updated Employee ${emp.id}`)));
  }}
}