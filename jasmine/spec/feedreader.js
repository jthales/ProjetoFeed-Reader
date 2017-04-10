$(function() {

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

        it("body has 'menu-hidden' initially", function(){
            expect(body.className).toContain("menu-hidden");
        });

        it("body toggles the class 'menu-hidden' on clicking menu icon", function() {
            menuIcon.click();
            expect(body.className).not.toContain('menu-hidden');

            menuIcon.click();
            expect(body.className).toContain('menu-hidden');
        });
    });

    describe('Initial Entries', function(){
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('has at least 1 entry after loadFeed function is calles', function(done){
            var numEntries = document.querySelector('.feed').getElementsByClassName('entry').length;
            expect(numEntries).toBeGreaterThan(0);
            done();
        });

        it("has a entry that has a link starting with 'http(s)://'", function(done) {
            var entries = document.querySelector('.feed').getElementsByClassName('entry-link');
            for(var i = 0; i < entries.length; i++){
                expect(entries[i].href).toMatch(/^(http|https):\/\//);
            }
            done();
        });
    });

    describe('Neww Feed Selection', function() {

        var initFeedSelection;
        beforeEach(function(done) {
            loadFeed(0, function(){
                initFeedSelection = document.querySelector('.feed').innerHTML;
                loadFeed(1, function() {
                    done();
                });
            });
        });

        it('changes its loaded content', function(done) {
            var newFeedSelection = document.querySelector('.feed').innerHTML;
            expect(initFeedSelection).not.toBe(newFeedSelection);
            done();
        });
    });
}());
