import { browser, by, element } from 'protractor';

export class TareasPage {
  navigateTo() {
    return browser.get('/tareas');
  }

  getTitleText() {
    return element(by.css('h4')).getText();
  }
}
