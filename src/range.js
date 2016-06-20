
/**
 * Creates an instance of IndexRange.
 * Stores a range of unsigned integers.
 * Expects integers in the range 0 <= n <= 9007199254740991.
 * Behavior for negative numbers is undefined.
 * @constructor
 * @this {IndexRange}
 */

module.exports = function IndexRange(start, end) {
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
 * Gets total length of range.
 * @returns {Number} - Length.
 */

Range.prototype.length = function() {
    this._end - this._start + 1;
}

/**
 * Test if index is in range.
 * @param {(string|Number)} idx - Index to test.
 * @returns {Boolean}
 */

Range.prototype.contains = function(idx) {
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

Range.prototype.equals = function(range) {
    return (range.start === this.start && range.end === this.end)
}
