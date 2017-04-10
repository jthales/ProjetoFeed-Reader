/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
            expect(allFeeds instanceof Array).toBeTruthy();
        });

        it('have name', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

        it('have URL', function(){
            allFeeds.forEach(function(feed){
                expect(feed.URL).toBeDefined();
                expect(feed.URL.length).not.toBe(0);
            });
        });
    });

    describe('The menu', function(){

        var body = document.body;
        var menuIcon = document.querySelector('.menu-icon-link');

        it("body has 'slide-menu' initially", function(){
            expect(body.className).toContain("slide-menu");
        });

        it("body toggles the class 'slide-menu' on clicking menu icon", function() {
            menuIcon.click();
            expect(body.className).not.toContain('slide-menu');

            menuIcon.click();
            expect(body.className).toContain('slide-menu');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
