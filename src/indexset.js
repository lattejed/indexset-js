
/**
 * Creates an instance of IndexSet.
 * Stores a set of unsigned integers efficiently.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @constructor
 * @this {IndexSet}
 */

module.exports = IndexSet = function() {
    if (!(this instanceof IndexSet)) {
        return new IndexSet();
    }
    /** @private */ 
    this._ranges = [];
    this._count = 0;
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
 * Add indexes to set.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @param {(string|Number|string[]|Number[])} idxs - Indexes to add.
 */

IndexSet.prototype.addIndexes = function(idxs) {
    if (!Array.isArray(idxs)) {
        idxs = [idxs];
    }
    var ranges = [];
    for (var i=0; i<idxs.length; i++) {
        var idx = idxs[i];
        ranges.push(new IndexRange(idx, idx));
    }
    this._addRanges(ranges);
}

/** 
 * Test if index is in set.
 * @param {(string|Number)} idx - Index to test.
 * @returns {Boolean}
 */

IndexSet.prototype.contains = function(idx) {
    return this._contains(idx);
}

/**
 * Gets total count of individual indexes in set.
 * @returns {Number} - Count.
 */

IndexSet.prototype.count = function() {
    return this._count;
}


/**
 * Gets first index in set or undefined if no indexes exist.
 * @returns {(Number|undefined)} - Index.
 */

IndexSet.prototype.firstIndex = function() {
    if (this._ranges.length === 0) {
        return undefined;
    }
    return this._ranges[0][0];
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
    return this._ranges[length-1][1];
}

/** 
 * Private methods 
 * @private
 */

IndexSet.prototype._addRanges = function(ranges) {
    this._ranges = IndexRange.compact(this._ranges + ranges)
    this._updateOrderAndCount();
}

IndexSet.prototype._removeRange = function(range) {
    var ranges = IndexRange.compact(this._ranges + [range])
    for (var i=0; i<ranges.length; i++) {
        var _range = ranges[i];
        if (range.equals(_range)) {
            ranges.splice(i, 1);
            break;
        } 
        if (range.overlaps(_range)) {
            ranges[i] = _range.subtract(range);
            break;
        }
    }
    this._updateCount();
}

IndexSet.prototype._updateCount = function() {
    var count = 0;
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        count += range.length;
    }
    this._count = count;
}

IndexSet.prototype._contains = function(idx) {
    idx = parseInt(idx, 10);  
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        if (range.contains(idx)) {
            return true;
        }
    }
    return false;
}
