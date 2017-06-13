import { FrontendappPage } from './app.po';

describe('frontendapp App', () => {
  let page: FrontendappPage;

  beforeEach(() => {
    page = new FrontendappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
