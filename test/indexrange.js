/**
 * Created by matthew on 6/21/16.
 */

var should = require('chai').should();
var IndexRange = require('../src/indexrange.js');

describe('IndexRange', function() {

    describe('new IndexRange()', function () {
        it('should check for valid range', function () {
            (function(){
                new IndexRange(1, 0);
            }).should.throw('Invalid range: End before start.');
        });
    });

    describe('#start()', function () {
        it('should give start index', function () {
            var range = new IndexRange(23, 24);
            range.start().should.equal(23);
        });
    });

    describe('#end()', function () {
        it('should give end index', function () {
            var range = new IndexRange(23, 24);
            range.end().should.equal(24);
        });
    });

    describe('#length()', function () {
        it('should give length or range', function () {
            var range = new IndexRange(23, 24);
            range.length().should.equal(2);
            var range = new IndexRange(23, 23);
            range.length().should.equal(1);
        });
    });

    describe('.sort()', function () {
        it('should sort ranges by start index', function () {
            var range0 = new IndexRange(0, 1);
            var range1 = new IndexRange(2, 4);
            var range2 = new IndexRange(3, 6);
            var sorted = IndexRange.sort([range1, range2, range0]);
            sorted[0].start().should.equal(0);
            sorted[1].start().should.equal(2);
            sorted[2].start().should.equal(3);
        });
    });

    describe('.compact()', function () {
        it('should join three overlapping ranges', function () {
            var range0 = new IndexRange(0, 1);
            var range1 = new IndexRange(2, 4);
            var range2 = new IndexRange(3, 6);
            var compacted = IndexRange.compact([range1, range2, range0]);
            compacted.length.should.equal(1);
            compacted[0].equals(new IndexRange(0, 6)).should.equal(true);
        });
        it('should join two contiguous ranges', function () {
            var range0 = new IndexRange(0, 1);
            var range1 = new IndexRange(2, 4);
            var compacted = IndexRange.compact([range1, range0]);
            compacted.length.should.equal(1);
            compacted[0].equals(new IndexRange(0, 4)).should.equal(true);
        });
        it('should not join two non-contiguous ranges', function () {
            var range0 = new IndexRange(0, 1);
            var range1 = new IndexRange(3, 5);
            var compacted = IndexRange.compact([range1, range0]);
            compacted.length.should.equal(2);
            compacted[0].equals(new IndexRange(0, 1)).should.equal(true);
            compacted[1].equals(new IndexRange(3, 5)).should.equal(true);
        });
    });

    describe('.join()', function () {
        it('should join two contiguous ranges', function () {
            var range0 = new IndexRange(0, 1);
            var range1 = new IndexRange(2, 4);
            range0.join(range1).equals(new IndexRange(0, 4)).should.equal(true);
        });
        it('should join fail to join two non-contiguous ranges', function () {
            var range0 = new IndexRange(0, 1);
            var range1 = new IndexRange(3, 4);
            (typeof range0.join(range1)).should.equal('undefined');
        });
    });

    describe('.subtract()', function () {
        it('should test true on subtracted range equality', function () {
            var range0 = new IndexRange(0, 10);
            var range1 = new IndexRange(11, 20);
            var range2 = new IndexRange(5, 15);
            var ranges = IndexRange.subtract([range0, range1], range2);
            ranges[0].equals(new IndexRange(0, 4)).should.equal(true);
            ranges[1].equals(new IndexRange(16, 20)).should.equal(true);
        });
        it('should test true on subtracted range equality', function () {
            var range0 = new IndexRange(0, 12);
            var range1 = new IndexRange(10, 20);
            var range2 = new IndexRange(5, 15);
            var ranges = IndexRange.subtract([range0, range1], range2);
            ranges.length.should.equal(2);
            ranges[0].equals(new IndexRange(0, 4)).should.equal(true);
            ranges[1].equals(new IndexRange(16, 20)).should.equal(true);
        });
        it('should test true on subtracted range equality', function () {
            var range0 = new IndexRange(0, 20);
            var range1 = new IndexRange(5, 15);
            var ranges = IndexRange.subtract([range0], range1);
            ranges.length.should.equal(2);
            ranges[0].equals(new IndexRange(0, 4)).should.equal(true);
            ranges[1].equals(new IndexRange(16, 20)).should.equal(true);
        });
        it('should test true on subtracted range equality', function () {
            var range0 = new IndexRange(0, 20);
            var range1 = new IndexRange(15, 25);
            var ranges = IndexRange.subtract([range0], range1);
            ranges.length.should.equal(1);
            ranges[0].equals(new IndexRange(0, 14)).should.equal(true);
        });
    });

    describe('#contains()', function () {
        it('should test true on range contains index', function () {
            var range = new IndexRange(2, 4);
            range.contains(2).should.equal(true);
            range.contains(3).should.equal(true);
            range.contains(4).should.equal(true);
        });
        it('should test false on range not contains index', function () {
            var range = new IndexRange(2, 4);
            range.contains(1).should.equal(false);
            range.contains(5).should.equal(false);
        });
    });

    describe('#equals()', function () {
        it('should test true on range equality', function () {
            var range0 = new IndexRange(2, 4);
            var range1 = new IndexRange(2, 4);
            range0.equals(range1).should.equal(true);
        });
        it('should test false on range inequality', function () {
            var range0 = new IndexRange(2, 4);
            var range1 = new IndexRange(0, 1);
            range0.equals(range1).should.equal(false);
        });
    });

    describe('#overlaps()', function () {
        it('should test true on range overlap', function () {
            var range0 = new IndexRange(0, 5);
            var range1 = new IndexRange(3, 6);
            range0.overlaps(range1).should.equal(true);
        });
        it('should test false on range non-overlap', function () {
            var range0 = new IndexRange(0, 5);
            var range1 = new IndexRange(6, 9);
            range0.overlaps(range1).should.equal(false);
        });
    });

    describe('#contiguous()', function () {
        it('should test true on contiguous range', function () {
            var range0 = new IndexRange(0, 2);
            var range1 = new IndexRange(3, 4);
            range0.contiguous(range1).should.equal(true);
        });
        it('should test false on non-contiguous range', function () {
            var range0 = new IndexRange(0, 2);
            var range1 = new IndexRange(6, 9);
            range0.contiguous(range1).should.equal(false);
        });
        it('should test false on overlapping range', function () {
            var range0 = new IndexRange(0, 2);
            var range1 = new IndexRange(1, 9);
            range0.contiguous(range1).should.equal(false);
        });
    });

});