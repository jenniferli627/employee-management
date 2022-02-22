import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

import {Employee} from '../employee';
import {EmployeeService} from '../employee.service';
import {Subscription} from 'rxjs';
import {map, reduce} from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  @Input() employee: Employee;
  @Output() modify = new EventEmitter<{ emp: Employee, del: boolean}>();

  reportees: Employee[] = [];
  subscritpions: Subscription[] = [];
  private totalReportees: Employee[];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.subscritpions.push(
      this.employeeService.getAll().pipe(
        reduce((emps, ele: Employee) => emps.concat(ele), []),
        map(emps => {
          this.totalReportees = emps;
            if (this.employee.directReports.length > 0) {
              for (let i = 0; i < this.employee.directReports.length; i++) {
                const reportee = this.totalReportees.find(emp => emp.id === this.employee.directReports[i]);
                this.reportees.push(reportee);
            }
          }}),
        ).subscribe());
  }

  //collects the employees reporting to this person, directly and indirectly
  private getReportees(reports: Array<number>) {
    for (let i = 0; i < reports.length; i++) {
      const reportee = this.totalReportees.find(elem => elem.id === reports[i]);
      if (reportee.directReports.length > 0) {
        this.getReportees(reportee.directReports);
      }
      this.reportees.push(reportee);
    }
  }

// Unsubscribe from subscriptions
ngOnDestroy() {
  this.subscritpions.forEach(sub => sub.unsubscribe());
}

private handleError(e: Error | any): string {
  console.error(e);
  return e.message || 'Unable to get information';
}

// Employee Update 
onUpd(item: Employee, del: boolean) {
  this.modify.emit({emp: item, del: del});
}

}


