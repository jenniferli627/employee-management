(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-title\" id=\"main-title\">Mindex Coding Challenge</h1>\n<h4 fxLayoutAlign=\"center\">Jifeng Li</h4>\n<app-employee-list fxFlexFill></app-employee-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let emp of employees\" fxLayoutAlign=\"center\">\n  <app-employee [employee]=\"emp\" id='employee-{{emp.id}}}' style=\"margin: 0.7em\" fxFlex=\"60\" (modify)=\"updEmployee($event)\"></app-employee>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"employee\">\n\n  <mat-card-header>\n    <mat-card-title>{{employee.firstName}} {{employee.lastName}}</mat-card-title>\n    <mat-card-subtitle><b>ID:</b> {{employee.id}} </mat-card-subtitle>\n    <mat-card-subtitle><b>Job Title: </b>{{employee.position}}</mat-card-subtitle>\n    <mat-card-subtitle><b>Direct Reports: </b>{{this.reportees.length || 0}}</mat-card-subtitle>\n  </mat-card-header>\n\n  <mat-card-content *ngIf=\"reportees.length > 0\">\n    <div fxLayout=\"column\" style=\"margin-left:1.5em \">\n      <h4>Reportees:</h4>\n\n      <div *ngFor=\"let item of reportees;\" id=\"reportees\">\n        <ng-container>\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\">\n            <div fxFlex>{{item.firstName}} {{item.lastName}}, {{item.position}}</div>\n            \n            <button mat-icon-button (click)=\"onUpd(item, false)\">\n              <mat-icon>edit</mat-icon>\n            </button>\n\n            <button mat-icon-button (click)=\"onUpd(item, true)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n        </ng-container>\n      </div>\n\n    </div>\n  </mat-card-content>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-employee/modify-employee.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modify-employee/modify-employee.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\n  <ng-container *ngIf=\"deletion else modify\">\n    <h1 mat-dialog-title>Update Information</h1>\n\n    <div mat-dialog-content id=\"delete-employee\">\n      <p>Confirm delete {{employee.firstName}} {{employee.lastName}}?</p>\n    </div>\n\n    <mat-dialog-actions fxFlex fxLayoutAlign=\"center center\">\n      <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial (click)=\"modifyEmployee()\">DELETE</button>\n      <button mat-button mat-dialog-close>CANCEL</button>\n    </mat-dialog-actions>\n  </ng-container>\n</div>\n\n<ng-template #modify>\n  <h1 mat-dialog-title>Edit Compensation</h1>\n\n  <div mat-dialog-content>\n    <div fxLayout=\"column\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>First Name</mat-label>\n        <input matInput [(ngModel)]=\"employee.firstName\" readonly>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Last Name</mat-label>\n        <input matInput [(ngModel)]=\"employee.lastName\" readonly>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Position</mat-label>\n        <input matInput [(ngModel)]=\"employee.position\" readonly>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Compensation</mat-label>\n        <input matInput currencyMask [(ngModel)]=\"employee.compensation\">\n      </mat-form-field>\n    </div>\n  </div>\n\n  <mat-dialog-actions fxFlex fxLayoutAlign=\"center center\">\n    <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial (click)=\"modifyEmployee()\" id=\"save\">SAVE</button>\n    <button mat-button mat-dialog-close id=\"cancel-save\">CANCEL</button>\n  </mat-dialog-actions>\n</ng-template>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var angular_in_memory_web_api_1 = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var backendless_mock_service_1 = __webpack_require__(/*! ./backendless-mock.service */ "./src/app/backendless-mock.service.ts");
var employee_component_1 = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var employee_list_component_1 = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var employee_service_1 = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var table_1 = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
var list_1 = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
var modify_employee_component_1 = __webpack_require__(/*! ./modify-employee/modify-employee.component */ "./src/app/modify-employee/modify-employee.component.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var ngx_currency_1 = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/__ivy_ngcc__/fesm5/ngx-currency.js");
var flex_layout_1 = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeComponent,
                employee_list_component_1.EmployeeListComponent,
                modify_employee_component_1.ModifyEmployeeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(backendless_mock_service_1.BackendlessMockService, {
                    apiBase: 'api/',
                    delay: 250,
                    passThruUnknownUrl: true,
                    post204: false,
                    put204: false
                }),
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                flex_layout_1.FlexLayoutModule,
                table_1.MatTableModule,
                list_1.MatListModule,
                dialog_1.MatDialogModule,
                ngx_currency_1.NgxCurrencyModule,
            ],
            providers: [employee_service_1.EmployeeService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/backendless-mock.service.ts":
/*!*********************************************!*\
  !*** ./src/app/backendless-mock.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BackendlessMockService = /** @class */ (function () {
    function BackendlessMockService() {
    }
    BackendlessMockService.prototype.createDb = function () {
        var employees = [
            {
                id: 1,
                firstName: 'Brian',
                lastName: 'McGee',
                position: 'CEO',
                directReports: [2, 3]
            },
            {
                id: 2,
                firstName: 'Homer',
                lastName: 'Thompson',
                position: 'Dev Manager',
                directReports: [4]
            },
            {
                id: 3,
                firstName: 'Rock',
                lastName: 'Strongo',
                position: 'Lead Tester'
            },
            {
                id: 4,
                firstName: 'Max',
                lastName: 'Power',
                position: 'Junior Software Engineer'
            }
        ];
        return { employees: employees };
    };
    return BackendlessMockService;
}());
exports.BackendlessMockService = BackendlessMockService;


/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var modify_employee_component_1 = __webpack_require__(/*! ../modify-employee/modify-employee.component */ "./src/app/modify-employee/modify-employee.component.ts");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, matDialog) {
        this.employeeService = employeeService;
        this.matDialog = matDialog;
        this.subscriptions = [];
        this.employees = [];
    }
    //get employees data
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.employeeService.getAll().pipe(operators_1.reduce(function (emps, ele) { return emps.concat(ele); }, []), operators_1.map(function (emps) { return _this.employees = emps; })).subscribe());
    };
    // Unsubscribe from subscriptions
    EmployeeListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    EmployeeListComponent.prototype.handleError = function (e) {
        console.error(e);
        return this.errorMessage = e.message || 'Unable to get information';
    };
    //Dialog
    EmployeeListComponent.prototype.updEmployee = function (event) {
        var _this = this;
        var dialogRef = this.matDialog.open(modify_employee_component_1.ModifyEmployeeComponent, {
            data: event
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.handleUpdResult(result, event);
        });
    };
    //Deal with dialog results
    EmployeeListComponent.prototype.handleUpdResult = function (result, event) {
        // Delete
        if (event.del) {
            this.subscriptions.push(this.employeeService.remove(event.emp).subscribe(function () { return console.log("Deleted Employee " + event.emp.id); }));
        }
        else {
            // Update information
            this.subscriptions.push(this.employeeService.save(result.data).subscribe(function (emp) { return console.log("Updated Employee " + emp.id); }));
        }
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService },
        { type: dialog_1.MatDialog }
    ]; };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'app-employee-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, dialog_1.MatDialog])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = '/api/employees';
    }
    EmployeeService.prototype.getAll = function () {
        return this.http.get(this.url)
            .pipe(operators_1.flatMap(function (emps) { return rxjs_1.from(emps); }), operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.get = function (id) {
        return this.http.get(this.url + "/" + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.save = function (emp) {
        var response = (!!emp.id) ? this.put(emp) : this.post(emp);
        return response.pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.remove = function (emp) {
        return this.http
            .delete(this.url + "/" + emp.id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.post = function (emp) {
        return this.http.post(this.url, emp);
    };
    EmployeeService.prototype.put = function (emp) {
        return this.http.put(this.url + "/" + emp.id, emp);
    };
    EmployeeService.prototype.handleError = function (res) {
        return rxjs_1.throwError(res.error || 'Server error');
    };
    EmployeeService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".employee {\n  background: whitesmoke;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbG95ZWUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.modify = new core_1.EventEmitter();
        this.reportees = [];
        this.subscritpions = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscritpions.push(this.employeeService.getAll().pipe(operators_1.reduce(function (emps, ele) { return emps.concat(ele); }, []), operators_1.map(function (emps) {
            _this.totalReportees = emps;
            if (_this.employee.directReports.length > 0) {
                var _loop_1 = function (i) {
                    var reportee = _this.totalReportees.find(function (emp) { return emp.id === _this.employee.directReports[i]; });
                    _this.reportees.push(reportee);
                };
                for (var i = 0; i < _this.employee.directReports.length; i++) {
                    _loop_1(i);
                }
            }
        })).subscribe());
    };
    //collects the employees reporting to this person, directly and indirectly
    EmployeeComponent.prototype.getReportees = function (reports) {
        var _loop_2 = function (i) {
            var reportee = this_1.totalReportees.find(function (elem) { return elem.id === reports[i]; });
            if (reportee.directReports.length > 0) {
                this_1.getReportees(reportee.directReports);
            }
            this_1.reportees.push(reportee);
        };
        var this_1 = this;
        for (var i = 0; i < reports.length; i++) {
            _loop_2(i);
        }
    };
    // Unsubscribe from subscriptions
    EmployeeComponent.prototype.ngOnDestroy = function () {
        this.subscritpions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    EmployeeComponent.prototype.handleError = function (e) {
        console.error(e);
        return e.message || 'Unable to get information';
    };
    // Employee Update 
    EmployeeComponent.prototype.onUpd = function (item, del) {
        this.modify.emit({ emp: item, del: del });
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: employee_service_1.EmployeeService }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], EmployeeComponent.prototype, "employee", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "modify", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "./src/app/modify-employee/modify-employee.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modify-employee/modify-employee.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeS1lbXBsb3llZS9tb2RpZnktZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modify-employee/modify-employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modify-employee/modify-employee.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var ModifyEmployeeComponent = /** @class */ (function () {
    function ModifyEmployeeComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.deletion = false;
        this.employee = data.emp;
        this.deletion = data.del;
        if (dialogRef) {
            dialogRef.disableClose = true;
        }
    }
    ModifyEmployeeComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] },
        { type: dialog_1.MatDialogRef }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], ModifyEmployeeComponent.prototype, "employee", void 0);
    ModifyEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'app-modify-employee',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modify-employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modify-employee/modify-employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./modify-employee.component.css */ "./src/app/modify-employee/modify-employee.component.css")).default]
        }),
        __param(0, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [Object, dialog_1.MatDialogRef])
    ], ModifyEmployeeComponent);
    return ModifyEmployeeComponent;
}());
exports.ModifyEmployeeComponent = ModifyEmployeeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\jifeng-li-mindex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map