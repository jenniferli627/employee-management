import { AppPage } from './app.po';
import {browser, by, element, protractor, until} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display proper title', () => {
    page.navigateTo();
    const title = element(by.id('main-title'));

    expect(title.getText()).toEqual('Mindex Coding Challenge');
  });

  it('should display employee-1', () => {
    const employee1 = element(by.id('reportee-1'));

    expect(employee1).toBeTruthy();
  });

  it('should display employee-2', () => {
    const employee2 = element(by.id('reportee-2'));

    expect(employee2).toBeTruthy();
  });

  it('should display employee-3', () => {
    const employee3 = element(by.id('reportee-3'));

    expect(employee3).toBeTruthy();
  });

  it('should display employee-4', () => {
    const employee4 = element(by.id('reportee-4'));

    expect(employee4).toBeTruthy();
  });
});
