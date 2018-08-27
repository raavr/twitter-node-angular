import { AppPage } from './app.po';

describe('twitter-node-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display default input value', () => {
    page.navigateTo();
    expect(page.getInputValue()).toEqual('TwitterApi');
  });
});
