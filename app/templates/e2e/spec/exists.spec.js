describe('protractor sample', function() {
  'use strict';

  beforeEach(function () {
    browser.get('http://localhost:9001');
  });

  it('home test', function() {
    // menu
    var home = element(by.css('a[ng-link="[\'Home\']"]'));
    home.click();

    // header
    var title = element(by.css('footer'));
    expect(title.getText()).toEqual('angular-eggs');

  });

  it('about test', function() {
    // menu
    var about = element(by.css('a[ng-link="[\'About\']"]'));
    about.click();

    // header
    var title = element(by.css('footer'));
    expect(title.getText()).toEqual('angular-eggs');

    var aboutTitle = element(by.css('h4'));
    expect(aboutTitle.getText()).toEqual('Grunt The JavaScript Task Runner');

    var gruntName = function(rowIndex) {
      return aboutElement(rowIndex, by.css('th'));
    };

    var aboutElement = function(rowIndex, selector) {
      return element(by.repeater('list in $ctrl.list').row(rowIndex)).element(selector);
    };

    expect(gruntName(0).getText()).toEqual('connect-history-api-fallback');
    expect(gruntName(1).getText()).toEqual('grunt');
  });

  it('contact - display', function() {
    // menu
    var contact = element(by.css('a[ng-link="[\'Contact\']"]'));

    // about画面
    contact.click();

    // header
    var title = element(by.css('footer'));
    expect(title.getText()).toEqual('angular-eggs');
  });
});
