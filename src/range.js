
/**
 * Creates an instance of IndexRange.
 * Stores a range of unsigned integers.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @constructor
 * @this {IndexRange}
 */

module.exports = IndexRange = function(start, end) {
    if (!(this instanceof IndexRange)) {
        return new Range(start, end);
    }
    this._start = parseInt(start, 10);
    this._end = parseInt(end, 10);
    if (this._start > this._end) {
        throw new Error('Invalid range: End before start.');
    }
}

/**
 * Gets first index of range.
 * @returns {Number} - Index.
 */

IndexRange.prototype.start = function() {
    return this._start;
}

/**
 * Gets last index of range.
 * @returns {Number} - Index.
 */

IndexRange.prototype.end = function() {
    return this._end;
}

/**
 * Gets total length of range.
 * @returns {Number} - Length.
 */

IndexRange.prototype.length = function() {
    this._end - this._start + 1;
}

/**
 * Sorts an array of IndexRanges
 * @returns {IndexRange[]} - Sorted ranges.
 */

IndexRange.sort = function(ranges) {
    if (!Array.isArray(ranges)) {
        throw new Error('IndexRange.sort() expects an array.');
    }
    return ranges.sort(function(a, b) {
        return a.start - b.start;
    });
}

/**
 * Sorts and combines overlapping ranges and returns the results.
 * @param {IndexRange[]} ranges - Ranges to compact.
 * @returns {IndexRange[]} - Compacted, sorted ranges.
 */

IndexRange.compact = function(ranges) {
    if (ranges.length < 2) {
        return ranges;
    }
    ranges = IndexRange.sort(ranges);
    var current = ranges[0];
    var combined = [];
    for (var i=1; i<ranges.length; i++) {
        var range = ranges[i];
        if (current.overlaps(range)) {
            current = current.join(range);
        } else {
            combined.push(current);
            current = range;
        }
        if (i === ranges.length - 1) {
            combined.push(current);
        }
    }
    return combined;
}

/**
 * Join two overlapping ranges.
 * If ranges do not overlap, returns undefined.
 * @returns {(IndexRange|undefined)} - New range.
 */

IndexRange.prototype.join = function(range) {
    if (!this.overlaps(range)) {
        return undefined;
    }
    return new IndexRange(
        Math.min(this._start, range.start),
        Math.max(this._end, range.end)
    );
}

/**
 * Subtract a range from an overlapping range.
 * If ranges do not overlap, returns undefined.
 * @returns {(IndexRange|undefined)} - New range.
 */

IndexRange.prototype.subtract = function(range) {
    if (!this.overlaps(range)) {
        return undefined;
    }
    if (this.start > range.start) {
        return new IndexRange(this._start - range.end, this._end);
    } else {
        return new IndexRange(this._start, range.start);
    }
}

/**
 * Test if index is in range.
 * @param {(string|Number)} idx - Index to test.
 * @returns {Boolean}
 */

IndexRange.prototype.contains = function(idx) {
    idx = parseInt(idx, 10);
    if (idx >= this._start && idx <= this._end) {
        return true;
    }
    return false;
}

/**
 * Test if ranges are equal.
 * @param {IndexRange} range - Range to test.
 * @returns {Boolean}
 */

IndexRange.prototype.equals = function(range) {
    return (range.start === this._start && range.end === this._end)
}

/**
 * Test if ranges overlap.
 * @param {IndexRange} range - Range to test.
 * @returns {Boolean}
 */

IndexRange.prototype.overlaps = function(range) {
    var ranges = IndexRange.sort([range, this])
    return (ranges[0].end >= ranges[1].start)
}
