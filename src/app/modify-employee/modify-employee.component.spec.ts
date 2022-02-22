import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyEmployeeComponent } from './modify-employee.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

describe('ModifyEmployeeComponent', () => {
  let component: ModifyEmployeeComponent;
  let fixture: ComponentFixture<ModifyEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyEmployeeComponent ],
      imports : [ MatDialogModule ],
      providers : [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyEmployeeComponent);
    component = fixture.componentInstance;
    component.employee = {
      id: 0,
      firstName: 'first',
      lastName: 'second',
      position: 'third',
      compensation: 0
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
