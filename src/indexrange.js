/**
 * Created by matthew on 6/21/16.
 */

/**
 * Create an instance of IndexRange.
 * Stores a range of unsigned integers.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @constructor
 * @this {IndexRange}
 * @param {Number|string} start - Start index.
 * @param {Number|string} end - End index.
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
 * Creates an instance of IndexRange from a string rep.
 * If string rep is invalid, returns undefined.
 * @constructor
 * @this {IndexRange}
 * @param {string} str - Valid string representation.
 */

IndexRange.fromString = function(str) {
    if (m = str.match(/^(\d+)-(\d+)$/)) {
        return new IndexRange(m[1], m[2]);
    }
    return undefined;
}

/**
 * Get first index of range.
 * @returns {Number} - Index.
 */

IndexRange.prototype.start = function() {
    return this._start;
}

/**
 * Get last index of range.
 * @returns {Number} - Index.
 */

IndexRange.prototype.end = function() {
    return this._end;
}

/**
 * Get total length of range.
 * @returns {Number} - Length.
 */

IndexRange.prototype.length = function() {
    return this._end - this._start + 1;
}

/**
 * Sort an array of IndexRanges
 * @returns {IndexRange[]} - Sorted ranges.
 */

IndexRange.sort = function(ranges) {
    if (!Array.isArray(ranges)) {
        throw new Error('IndexRange.sort() expects an array.');
    }
    return ranges.sort(function(a, b) {
        return a.start() - b.start();
    });
}

/**
 * Sort and combine overlapping ranges and return the results.
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
        if (current.overlaps(new IndexRange(range.start() - 1, range.end()))) {
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
 * Sort and subtract a range from a set of ranges.
 * Performs the opposite of .compact().
 * @param {IndexRange[]} ranges - Ranges to subtract range from.
 * @param {IndexRange} range - Range to subtract.
 * @returns {IndexRange[]} - Sorted ranges, minus range.
 */

IndexRange.subtract = function(ranges, range) {
    if (!Array.isArray(ranges)) {
        ranges = [ranges];
    }
    ranges = IndexRange.sort(ranges).reverse();
    var i = ranges.length;
    var to_add = [];
    while (i--) {
        var _range = ranges[i];
        if (range.start() <= _range.start() && range.end() >= _range.end()) {
            ranges.splice(i, 1);
            continue;
        }
        if (range.start() > _range.start() && range.end() < _range.end()) {
            ranges.splice(i, 1);
            to_add.push(new IndexRange(_range.start(), range.start() - 1));
            to_add.push(new IndexRange(range.end() + 1, _range.end()));
            continue;
        }
        if (range.end() < _range.end() && range.end() >= _range.start()) {
            ranges.splice(i, 1);
            to_add.push(new IndexRange(range.end() + 1, _range.end()));
            continue;
        }
        if (range.end() > _range.end() && range.start() <= _range.end()) {
            ranges.splice(i, 1);
            to_add.push(new IndexRange(_range.start(), range.start() - 1));
            continue;
        }
    }
    return IndexRange.sort(ranges.concat(to_add));
}

/**
 * Join two overlapping or contiguous ranges.
 * If ranges do not overlap, returns undefined.
 * @param {IndexRange} range - Range to join.
 * @returns {(IndexRange|undefined)} - New range.
 */

IndexRange.prototype.join = function(range) {
    if (!(this.overlaps(range) || this.contiguous(range))) {
        return undefined;
    }
    return new IndexRange(
        Math.min(this._start, range.start()),
        Math.max(this._end, range.end())
    );
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
    return (range.start() === this._start && range.end() === this._end)
}

/**
 * Test if ranges overlap.
 * @param {IndexRange} range - Range to test.
 * @returns {Boolean}
 */

IndexRange.prototype.overlaps = function(range) {
    var ranges = IndexRange.sort([range, this])
    return (ranges[0].end() >= ranges[1].start())
}

/**
 * Test if ranges are contiguous but not overlapping.
 * @param {IndexRange} range - Range to test.
 * @returns {Boolean}
 */

IndexRange.prototype.contiguous = function(range) {
    var ranges = IndexRange.sort([range, this])
    return (ranges[0].end() + 1 === ranges[1].start())
}

/**
 * Creates a string representation of IndexRange
 * @override
 * @returns {string} - String representation.
 */

IndexRange.prototype.toString = function() {
    return '' + this._start + '-' + this._end;
}
