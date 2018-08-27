import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getInputValue() {
    return element(by.css('.tweet-search input')).getAttribute('value');
  }
}
