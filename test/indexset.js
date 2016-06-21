
var should = require('chai').should();
var IndexSet = require('../src/indexset.js');

describe('IndexSet', function() {

    describe('#addRanges()', function () {
        it('should add one range', function () {
            var range = new IndexRange(23, 24);
            var set = new IndexSet();
            set.addRanges(range);
            set.count().should.equal(2);
        });
        it('should add two ranges', function () {
            var range0 = new IndexRange(23, 24);
            var range1 = new IndexRange(37, 40);
            var set = new IndexSet();
            set.addRanges([range0, range1]);
            set.count().should.equal(6);
        });
    });


    describe('#removeRange()', function () {
        it('should remove one range', function () {
            var range = new IndexRange(23, 24);
            var set = new IndexSet();
            set.addRanges(range);
            set.count().should.equal(2);
            set.removeRange(range);
            set.count().should.equal(0);
        });
        it('should split a range in set', function () {
            var range0 = new IndexRange(0, 20);
            var range1 = new IndexRange(1, 19);
            var set = new IndexSet();
            set.addRanges(range0);
            set.count().should.equal(21);
            set.removeRange(range1);
            set.count().should.equal(2);
        });
    });


    describe('#addIndexes()', function () {
        it('should an index as string', function () {
            var set = new IndexSet();
            set.addIndexes('1');
            set.count().should.equal(1);
        });
        it('should an array of indexes as numbers', function () {
            var set = new IndexSet();
            set.addIndexes([0,1,2,3]);
            set.count().should.equal(4);
        });
    });

    describe('#removeIndexes()', function () {
        it('should remove one index', function () {
            var range = new IndexRange(0, 9);
            var set = new IndexSet();
            set.addRanges(range);
            set.count().should.equal(10);
            set.removeIndexes(5);
            set.count().should.equal(9);
        });
        it('should remove two indexes', function () {
            var range = new IndexRange(1, 20);
            var set = new IndexSet();
            set.addRanges(range);
            set.count().should.equal(20);
            set.removeIndexes([4,8]);
            set.contains(4).should.equal(false);
            set.contains(8).should.equal(false);
        });
    });

    describe('#firstIndex()', function () {
        it('should return first index', function () {
            var range = new IndexRange(3, 9);
            var set = new IndexSet();
            set.addRanges(range);
            set.firstIndex().should.equal(3);
        });
        it('should return undefined', function () {
            var set = new IndexSet();
            (typeof set.firstIndex()).should.equal('undefined');
        });
    });

    describe('#lastIndex()', function () {
        it('should return last index', function () {
            var range = new IndexRange(3, 9);
            var set = new IndexSet();
            set.addRanges(range);
            set.lastIndex().should.equal(9);
        });
        it('should return undefined', function () {
            var set = new IndexSet();
            (typeof set.lastIndex()).should.equal('undefined');
        });
    });

});