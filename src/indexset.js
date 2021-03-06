/**
 * Created by matthew on 6/21/16.
 */

/** @module IndexSet */

var IndexRange = require('./indexrange.js');

/** @class IndexSet */

/**
 * Create an instance of IndexSet.
 * Stores a set of unsigned integers efficiently.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @constructor
 * @this {IndexSet}
 * @param {(string|Number[]|string[])} idxs - A string representation or array of numbers or strings
 */

module.exports = IndexSet = function(idxs) {
    if (!(this instanceof IndexSet)) {
        return new IndexSet();
    }

    /** @private */
    this._ranges = [];
    this._count = 0;

    if (idxs === undefined) return;
    if (Array.isArray(idxs) && idxs.length === 0) return;

    if (typeof idxs === 'string') {
        this._fromString(idxs);
    } else {
        var obj = Array.isArray(idxs) && idxs.length > 0 ? idxs[0] : idxs;
        if (obj instanceof IndexRange) {
            this.addRanges(idxs);
        } else {
            this.addIndexes(idxs);
        }
    }
}

/**
 * Creates an instance of IndexSet from a string rep.
 * If string rep is invalid, returns undefined.
 * @this {IndexSet}
 * @param {string} str - Valid string representation.
 */

IndexSet.fromString = function(str) {
    var set = new IndexSet();
    set._fromString(str);
    return set;
}

/**
 * Add IndexRanges to set.
 * @param {(IndexRange|IndexRange[])} ranges - IndexRanges to add.
 */

IndexSet.prototype.addRanges = function(ranges) {
    if (!Array.isArray(ranges)) {
        ranges = [ranges];
    }
    this._addRanges(ranges);
}

/**
 * Remove IndexRange from set.
 * If set does not contain indexes in range, does nothing.
 * @param {IndexRange} range - IndexRanges to remove.
 */

IndexSet.prototype.removeRange = function(range) {
    this._removeRange(range);
}

/** 
 * Add indexes to set.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @param {(string|Number|string[]|Number[])} idxs - Indexes to add.
 */

IndexSet.prototype.addIndexes = function(idxs) {
    if (!Array.isArray(idxs)) {
        idxs = [idxs];
    }
    var ints = [];
    for (var i=0; i<idxs.length; i++) {
        ints.push(parseInt(idxs[i], 10));
    }
    ints = ints.sort(function(a,b) { return a - b; });
    var ranges = [];
    var start = undefined;
    var end = undefined;
    for (var i=0; i<ints.length; i++) {
        var idx = ints[i];
        if (start === undefined) {
            start = end = idx;
        }
        if (idx - end < 2) {
            end = idx;
        } else {
            ranges.push(new IndexRange(start, end));
            start = end = idx;
        }
    }
    ranges.push(new IndexRange(start, end));
    this._addRanges(ranges);
}

/**
 * Remove indexes from set.
 * If set does not contain indexes, does nothing.
 * @param {(string|Number|string[]|Number[])} range idxs - Indexes to remove.
 */

IndexSet.prototype.removeIndexes = function(idxs) {
    if (!Array.isArray(idxs)) {
        idxs = [idxs];
    }
    for (var i=0; i<idxs.length; i++) {
        var idx = idxs[i];
        var range = new IndexRange(idx, idx);
        this._removeRange(range);
    }
}

/** 
 * Test if index is in set.
 * @param {(string|Number)} idx - Index to test.
 * @returns {Boolean}
 */

IndexSet.prototype.contains = function(idx) {
    idx = parseInt(idx, 10);
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        if (range.contains(idx)) {
            return true;
        }
    }
    return false;
}

/**
 * Gets total count of individual indexes in set.
 * @returns {Number} - Count.
 */

IndexSet.prototype.count = function() {
    return this._count;
}

/**
 * Gets stored index at specific contiguous index.
 * @see #count().
 * @returns {Number} - Count.
 */

IndexSet.prototype.indexAt = function(idx) {
    if (idx >= this._count || idx < 0) {
        throw new Error('Index out of range')
    }
    var lo = 0;
    var hi = 0;
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        hi += range.length();
        if (idx >= lo && idx < hi) {
            var offset = idx - lo;
            return range.start() + offset;
        }
        lo += range.length();
    }
}

/**
 * Gets first index in set or undefined if no indexes exist.
 * @returns {(Number|undefined)} - Index.
 */

IndexSet.prototype.firstIndex = function() {
    if (this._ranges.length === 0) {
        return undefined;
    }
    return this._ranges[0].start();
}

/**
 * Gets last index in set or undefined if no indexes exist.
 * @returns {(Number|undefined)} - Index.
 */

IndexSet.prototype.lastIndex = function() {
    var length = this._ranges.length;
    if (length === 0) {
        return undefined;
    }
    return this._ranges[length-1].end();
}

/**
 * Separates ranges to max length.
 * @param {Number} maxLength - Maximum lenght of returned range.
 * @returns {IndexRange[]} - Ranges.
 */

IndexSet.prototype.pagedRanges = function(maxLength) {
    if (this._ranges.length === 0 || maxLength === undefined) {
        return this._ranges;
    }
    var ranges = [];
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        if (range.length() <= maxLength) {
            ranges.push(range);
        } else {
            var num = Math.floor(range.length() / maxLength);
            var rem = range.length() % maxLength;
            for (var j=0; j<num; j++) {
                let start = range.start() + (maxLength * j);
                ranges.push(new IndexRange(start, start + maxLength - 1));
            }
            if (rem > 0) {
                ranges.push(new IndexRange(maxLength * num, maxLength * num + rem - 1));
            }
        }
    }
    return ranges;
}

/**
 * Creates a string representation of IndexSet.
 * If no indexes are present, returns undefined.
 * @override
 * @returns {string|undefined} - String representation.
 */

IndexSet.prototype.toString = function() {
    if (this._ranges.length === 0) {
        return undefined;
    }
    var ranges = IndexRange.compact(this._ranges);
    var reps = [];
    for (var i=0; i<ranges.length; i++) {
        reps.push(ranges[i].toString());
    }
    return reps.join(',');
}

/** 
 * Private methods 
 * @private
 */

IndexSet.prototype._addRanges = function(ranges) {
    this._ranges = IndexRange.compact(this._ranges.concat(ranges));
    this._updateCount();
}

IndexSet.prototype._removeRange = function(range) {
    if (this._ranges.length > 0) {
        this._ranges = IndexRange.subtract(this._ranges, range);
    }
    this._updateCount();
}

IndexSet.prototype._updateCount = function() {
    var count = 0;
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        count += range.length();
    }
    this._count = count;
}

IndexSet.prototype._fromString = function(str) {
    var reps = str.split(',');
    var ranges = [];
    for (var i=0; i<reps.length; i++) {
        if (range = IndexRange.fromString(reps[i])) {
            ranges.push(range);
        } else {
            throw new Error('Invalid range')
        }
    }
    this._ranges = [];
    this._count = 0;
    this._addRanges(ranges);
}
