import { LateNightPage } from './app.po';

describe('late-night App', () => {
  let page: LateNightPage;

  beforeEach(() => {
    page = new LateNightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
