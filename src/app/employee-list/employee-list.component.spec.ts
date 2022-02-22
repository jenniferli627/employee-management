import {async, TestBed} from '@angular/core/testing';
import {Component, Input} from '@angular/core';

import {EmployeeListComponent} from './employee-list.component';
import {EmployeeService} from '../employee.service';
import {MatDialogModule} from '@angular/material/dialog';
import {ModifyEmployeeComponent} from '../modify-employee/modify-employee.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({selector: 'app-employee', template: ''})
class EmployeeComponent {
  @Input('employee') employee: any;
}

@Component({selector: 'app-mat-grid-list', template: ''})
class GridListComponent {
}

@Component({selector: 'app-mat-grid-tile', template: ''})
class GridTileComponent {
}

const employeeServiceSpy = jasmine.createSpyObj('EmployeeService', ['getAll', 'get', 'save', 'remove']);

describe('EmployeeListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeListComponent,
        EmployeeComponent,
        GridListComponent,
        GridTileComponent,
        ModifyEmployeeComponent,
      ],
      providers: [
        {provide: EmployeeService, useValue: employeeServiceSpy},
      ],
      imports : [
        MatDialogModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(EmployeeListComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  }));
});
