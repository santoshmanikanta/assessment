import { AngularAssessmentPage } from './app.po';

describe('angular-assessment App', function() {
  let page: AngularAssessmentPage;

  beforeEach(() => {
    page = new AngularAssessmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
