
/**
 * Creates an instance of IndexSet.
 * Stores a set of unsigned integers efficiently.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @constructor
 * @this {IndexSet}
 */

module.exports = function IndexSet() {
    if (!(this instanceof IndexSet)) {
        return new IndexSet(idxs);
    }
    /** @private */ 
    this._ranges = [];
    this._count = 0;
}

/**
 * Add Ranges to set.
 * @param {(Range|Range[])} ranges - Ranges to add.
 */

IndexSet.prototype.addRanges = function(ranges) {
    if (!Array.isArray(ranges)) {
        ranges = [ranges];
    }
    for (var i=0; i<ranges.length; i++) {
        this._addRange(ranges[i]);
    }
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
    for (var i=0; i<idxs.length; i++) {
        this._addRange(new Range(idxs[i], idxs[i]));
    }
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

IndexSet.prototype._addRange = function(range) {
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        var lo = range.start;
        var hi = range.end;
        if (idx >= lo && idx <= hi) {
            continue;
        }
        if (idx + 1 === lo) {
            this._ranges[i] = new Range(idx, hi);
            break;
        }
        if (idx - 1 === hi) {
            this._ranges[i] = new Range(lo, idx);
            break;
        }
        this._ranges.push(new Range(idx, idx))
    }
    this._updateOrderAndCount();
}

IndexSet.prototype._removeRange = function(range) {
    for (var i=0; i<this._ranges.length; i++) {
        var _range = this._ranges[i];
        var lo = _range.start
        var hi = _range.end;
        if (range.equals(_range)) {
            this._ranges.splice(i, 1);
            break;
        }
        if (idx === lo) {
            this._ranges[i] = [lo + 1, hi];
            break;
        }
        if (idx === hi) {
            this._ranges[i] = [lo, hi - 1];
            break;
        }
        if (idx >= lo && idx <= hi) {
            this._ranges.push([lo, idx - 1]);
            this._ranges.push([idx + 1, hi]);
            break;
        }
    }
    this._updateOrderAndCount();
}

IndexSet.prototype._removeIndex = function(idx) {
    idx = parseInt(idx, 10);  
    for (var i=0; i<this._ranges.length; i++) {
        var range = this._ranges[i];
        var lo = range[0];
        var hi = range[1];
        if (idx === lo && hi === lo) {
            this._ranges.splice(i, 1);
            break;
        }
        if (idx === lo) {
            this._ranges[i] = [lo + 1, hi];
            break;
        }
        if (idx === hi) {
            this._ranges[i] = [lo, hi - 1];
            break;
        }
        if (idx >= lo && idx <= hi) {
            this._ranges.push([lo, idx - 1]);
            this._ranges.push([idx + 1, hi]);
            break;
        }
    }
    this._updateOrderAndCount();
}

IndexSet.prototype._updateOrderAndCount = function() {
    this._ranges = this._ranges.sort(function(a, b) { 
        return a.start - b.start;
    });
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
