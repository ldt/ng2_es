import { Ng2EsPage } from './app.po';

describe('ng2-es App', function() {
  let page: Ng2EsPage;

  beforeEach(() => {
    page = new Ng2EsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
