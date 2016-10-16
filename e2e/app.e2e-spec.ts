import { MEANSeedPage } from './app.po';

describe('meanseed App', function() {
  let page: MEANSeedPage;

  beforeEach(() => {
    page = new MEANSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
