
var should = require('chai').should();
var IndexSet = require('../src/indexset.js');

describe('IndexSet', function() {

    describe('new IndexSet()', function () {
        it('should create a set from a string rep', function () {
            var set = new IndexSet('1-2,5-10,11-14');
            set.count().should.equal(12);
        });
        it('should create a set from a string rep', function () {
            var set = new IndexSet('1-2');
            set.count().should.equal(2);
        });
        it('should create a set from a range', function () {
            var range = new IndexRange(23, 24);
            var set = new IndexSet(range);
            set.count().should.equal(2);
        });
        it('should create a set from indexes', function () {
            var set = new IndexSet([3, 4]);
            set.count().should.equal(2);
        });
        it('should create a set from emtpy array', function () {
            var set = new IndexSet([]);
            set.count().should.equal(0);
        });
    });

    describe('.fromString()', function () {
        it('should create a set from a string rep', function () {
            var set = IndexSet.fromString('1-2,5-10,11-14');
            set.count().should.equal(12);
        });
        it('should fail to create a set from an invalid string rep', function () {
            (function(){
                IndexSet.fromString('1-2,,5-10');
            }).should.throw(Error);
            (function(){
                IndexSet.fromString('A-2,5-10');
            }).should.throw(Error);
        });
    });

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
        it('should add an index as string', function () {
            var set = new IndexSet();
            set.addIndexes('1');
            set.count().should.equal(1);
        });
        it('should add an array of indexes as numbers', function () {
            var set = new IndexSet();
            set.addIndexes([0,1,2,3]);
            set.count().should.equal(4);
        });
        it('should add an array of indexes as strings', function () {
            var set = new IndexSet();
            set.addIndexes(['0','1','2','3']);
            set.count().should.equal(4);
        });
        it('should add an array non-contiguous indexes', function () {
            var set = new IndexSet();
            set.addIndexes([0, 1, 3, 4, 6]);
            set.count().should.equal(5);
        });
        it('should add a large array of indexes', function () {
            var idxs = [];
            for (var i=0; i<1000; i++) {
                idxs.push(i);
            }
            var set = new IndexSet();
            set.addIndexes(idxs);
            set.count().should.equal(1000);
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

    describe('#toString()', function () {
        it('should create string rep of set', function () {
            var range0 = new IndexRange(0, 10);
            var range1 = new IndexRange(15, 20);
            var set = new IndexSet();
            set.addRanges([range0, range1]);
            set.toString().should.equal('0-10,15-20');
        });
    });

});