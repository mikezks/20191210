import { browser } from 'protractor';

describe('Page Title E2E Test', () => {
    beforeEach(() => {
        browser.get('http://localhost:4299');
    });

    it('should verify the page title', () => {
        // Asynchronous events are handled by the testing environment
        const pageTitle = browser.getTitle();
        expect(pageTitle).toEqual('Starter');
    });

    it('should verify the page title manually', (done) => {
        // Asynchronous events are handled manually by providing a callback function to the promise then method
        browser.getTitle()
            .then(function(pageTitle) {
                expect(pageTitle).toEqual('Starter');
                done();
            });
    });
});
