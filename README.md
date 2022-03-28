# Mindex Angular 9 Coding Challenge

## What's Provided
An [Angular 9](https://angular.io/) employee web application has been created and bootstrapped using an in browser "database".
Basic unit and e2e tests have been created.  [Angular Material Design](https://material.angular.io/) and [Flex Layout](https://github.com/angular/flex-layout)
have been added as dependencies.  Feel free to add or use other dependencies as you see fit.

### Initial setup

Install [Node](https://nodejs.org/en/) version 10.13+.  After installation run `npm install` at the root of this project.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You may notice build errors when you attempt to build/start the app for the first time. This is by design, the compile-time errors should describe what is missing. Completing Tasks 1 & 2 will resolve this.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## What to Implement

The tasks for this challenge will build a simple user interface that will allow a user to view a listing of employees and their direct reports. Thew challenge will ask you to build and layout the page as shown and to implement a couple CRUD operations on the listing of direct reports, specifically to UPDATE the compensation and DELETE the direct report. As a final task, the challenge with ask you to add styling to the page components.

![](./md_images/homepage.png)

### Task 1

1. Browse the code base and familiarize yourself with the file structure. If you've used the Angular-CLI in the past, the directory structure should be familiar.
2. Add a new compensation property of type number to the [employee](./src/app/employee.ts) type.

### Task 2

1. Add the type to the [employee component](./src/app/employee/employee.component.ts). The [employee](./src/app/employee.ts) type may have the property directReports which is an array of other employee ids who report directly to this employee.
2. On the [employee component](./src/app/employee/employee.component.ts) add a new field that collects the employees reporting to this person, directly and indirectly & display the **total** number of these employees in the header of the card.

### Task 3

1. On the [employee view template](./src/app/employee/employee.component.html) add functionality to list the direct reports, if any, and & style the rows to disambiguate the reports.
2. On each report row, create two buttons. One for **EDITING** a row item and one for **DELETING** a row item.  
3. Implement an **EventEmmiter** on the **Employee Component** that will emit an event to the parent **Employee List Component** to handle the CRUD action. The **Employee List component** should handle initiating and observing the service request (EDIT/DELETE).

### Task 4

1. Create and register a new app-level component to show a dialog to the user. This dialog will be used to either show a Delete confirmation, or to present the user with a form by which they can update the employee compensation:

![](./md_images/delete.png)

![](./md_images/crud.png)

### Task 5

1. Implement in the **Employee List Component** the handler to initiate and observe the service calls to either delete or update the direct reports being serviced in the previous task.

### Task 6

1. Style the page to your liking, ... show us what you got. Have fun.
