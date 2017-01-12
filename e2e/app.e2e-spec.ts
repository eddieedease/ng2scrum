import { Ng2scrumPage } from './app.po';

describe('ng2scrum App', function() {
  let page: Ng2scrumPage;

  beforeEach(() => {
    page = new Ng2scrumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
