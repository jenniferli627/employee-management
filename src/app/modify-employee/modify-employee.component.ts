import {Component, Inject, Input} from '@angular/core';
import {Employee} from '../employee';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent {
  @Input() employee: Employee;
  deletion = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data,
              private dialogRef: MatDialogRef<any>) {
    this.employee = data.emp as Employee;
    this.deletion = data.del;
    if (dialogRef) {
      dialogRef.disableClose = true;
    }
  }
}
