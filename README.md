
# API Reference

<a name="module_IndexSet"></a>

## IndexSet

* [IndexSet](#module_IndexSet)
    * [module.exports](#exp_module_IndexSet--module.exports) ⏏
        * [new module.exports()](#new_module_IndexSet--module.exports_new)
        * [~IndexSet](#module_IndexSet--module.exports..IndexSet)
            * _instance_
                * [.addRanges(ranges)](#module_IndexSet--module.exports..IndexSet+addRanges)
                * [.removeRange(range)](#module_IndexSet--module.exports..IndexSet+removeRange)
                * [.addIndexes(idxs)](#module_IndexSet--module.exports..IndexSet+addIndexes)
                * [.removeIndexes(range)](#module_IndexSet--module.exports..IndexSet+removeIndexes)
                * [.contains(idx)](#module_IndexSet--module.exports..IndexSet+contains) ⇒ <code>Boolean</code>
                * [.count()](#module_IndexSet--module.exports..IndexSet+count) ⇒ <code>Number</code>
                * [.firstIndex()](#module_IndexSet--module.exports..IndexSet+firstIndex) ⇒ <code>Number</code> &#124; <code>undefined</code>
                * [.lastIndex()](#module_IndexSet--module.exports..IndexSet+lastIndex) ⇒ <code>Number</code> &#124; <code>undefined</code>
                * [.toString()](#module_IndexSet--module.exports..IndexSet+toString) ⇒ <code>string</code> &#124; <code>undefined</code>
            * _static_
                * [.fromString(str)](#module_IndexSet--module.exports..IndexSet.fromString)

<a name="exp_module_IndexSet--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
**this**: <code>{IndexSet}</code>  
<a name="new_module_IndexSet--module.exports_new"></a>

#### new module.exports()
Create an instance of IndexSet.
Stores a set of unsigned integers efficiently.
Expects integers in the range 0 <= n <= 9007199254740991.
Behavior for negative numbers is undefined.

<a name="module_IndexSet--module.exports..IndexSet"></a>

#### module.exports~IndexSet
**Kind**: inner class of <code>[module.exports](#exp_module_IndexSet--module.exports)</code>  

* [~IndexSet](#module_IndexSet--module.exports..IndexSet)
    * _instance_
        * [.addRanges(ranges)](#module_IndexSet--module.exports..IndexSet+addRanges)
        * [.removeRange(range)](#module_IndexSet--module.exports..IndexSet+removeRange)
        * [.addIndexes(idxs)](#module_IndexSet--module.exports..IndexSet+addIndexes)
        * [.removeIndexes(range)](#module_IndexSet--module.exports..IndexSet+removeIndexes)
        * [.contains(idx)](#module_IndexSet--module.exports..IndexSet+contains) ⇒ <code>Boolean</code>
        * [.count()](#module_IndexSet--module.exports..IndexSet+count) ⇒ <code>Number</code>
        * [.firstIndex()](#module_IndexSet--module.exports..IndexSet+firstIndex) ⇒ <code>Number</code> &#124; <code>undefined</code>
        * [.lastIndex()](#module_IndexSet--module.exports..IndexSet+lastIndex) ⇒ <code>Number</code> &#124; <code>undefined</code>
        * [.toString()](#module_IndexSet--module.exports..IndexSet+toString) ⇒ <code>string</code> &#124; <code>undefined</code>
    * _static_
        * [.fromString(str)](#module_IndexSet--module.exports..IndexSet.fromString)

<a name="module_IndexSet--module.exports..IndexSet+addRanges"></a>

##### indexSet.addRanges(ranges)
Add IndexRanges to set.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ranges | <code>IndexRange</code> &#124; <code>Array.&lt;IndexRange&gt;</code> | IndexRanges to add. |

<a name="module_IndexSet--module.exports..IndexSet+removeRange"></a>

##### indexSet.removeRange(range)
Remove IndexRange from set.
If set does not contain indexes in range, does nothing.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>IndexRange</code> | IndexRanges to remove. |

<a name="module_IndexSet--module.exports..IndexSet+addIndexes"></a>

##### indexSet.addIndexes(idxs)
Add indexes to set.
Expects integers in the range 0 <= n <= 9007199254740991.
Behavior for negative numbers is undefined.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  

| Param | Type | Description |
| --- | --- | --- |
| idxs | <code>string</code> &#124; <code>Number</code> &#124; <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;Number&gt;</code> | Indexes to add. |

<a name="module_IndexSet--module.exports..IndexSet+removeIndexes"></a>

##### indexSet.removeIndexes(range)
Remove indexes from set.
If set does not contain indexes, does nothing.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>string</code> &#124; <code>Number</code> &#124; <code>Array.&lt;string&gt;</code> &#124; <code>Array.&lt;Number&gt;</code> | idxs - Indexes to remove. |

<a name="module_IndexSet--module.exports..IndexSet+contains"></a>

##### indexSet.contains(idx) ⇒ <code>Boolean</code>
Test if index is in set.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  

| Param | Type | Description |
| --- | --- | --- |
| idx | <code>string</code> &#124; <code>Number</code> | Index to test. |

<a name="module_IndexSet--module.exports..IndexSet+count"></a>

##### indexSet.count() ⇒ <code>Number</code>
Gets total count of individual indexes in set.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  
**Returns**: <code>Number</code> - - Count.  
<a name="module_IndexSet--module.exports..IndexSet+firstIndex"></a>

##### indexSet.firstIndex() ⇒ <code>Number</code> &#124; <code>undefined</code>
Gets first index in set or undefined if no indexes exist.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  
**Returns**: <code>Number</code> &#124; <code>undefined</code> - - Index.  
<a name="module_IndexSet--module.exports..IndexSet+lastIndex"></a>

##### indexSet.lastIndex() ⇒ <code>Number</code> &#124; <code>undefined</code>
Gets last index in set or undefined if no indexes exist.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  
**Returns**: <code>Number</code> &#124; <code>undefined</code> - - Index.  
<a name="module_IndexSet--module.exports..IndexSet+toString"></a>

##### indexSet.toString() ⇒ <code>string</code> &#124; <code>undefined</code>
Creates a string representation of IndexSet.
If no indexes are present, returns undefined.

**Kind**: instance method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  
**Returns**: <code>string</code> &#124; <code>undefined</code> - - String representation.  
<a name="module_IndexSet--module.exports..IndexSet.fromString"></a>

##### IndexSet.fromString(str)
Creates an instance of IndexSet from a string rep.
If string rep is invalid, returns undefined.

**Kind**: static method of <code>[IndexSet](#module_IndexSet--module.exports..IndexSet)</code>  
**this**: <code>{IndexSet}</code>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Valid string representation. |


---

<a name="module_IndexRange"></a>

## IndexRange

* [IndexRange](#module_IndexRange)
    * [module.exports](#exp_module_IndexRange--module.exports) ⏏
        * [new module.exports(start, end)](#new_module_IndexRange--module.exports_new)
        * [~IndexRange](#module_IndexRange--module.exports..IndexRange)
            * _instance_
                * [.start()](#module_IndexRange--module.exports..IndexRange+start) ⇒ <code>Number</code>
                * [.end()](#module_IndexRange--module.exports..IndexRange+end) ⇒ <code>Number</code>
                * [.length()](#module_IndexRange--module.exports..IndexRange+length) ⇒ <code>Number</code>
                * [.join(range)](#module_IndexRange--module.exports..IndexRange+join) ⇒ <code>IndexRange</code> &#124; <code>undefined</code>
                * [.contains(idx)](#module_IndexRange--module.exports..IndexRange+contains) ⇒ <code>Boolean</code>
                * [.equals(range)](#module_IndexRange--module.exports..IndexRange+equals) ⇒ <code>Boolean</code>
                * [.overlaps(range)](#module_IndexRange--module.exports..IndexRange+overlaps) ⇒ <code>Boolean</code>
                * [.contiguous(range)](#module_IndexRange--module.exports..IndexRange+contiguous) ⇒ <code>Boolean</code>
                * [.toString()](#module_IndexRange--module.exports..IndexRange+toString) ⇒ <code>string</code>
            * _static_
                * [.fromString(str)](#module_IndexRange--module.exports..IndexRange.fromString)
                * [.sort()](#module_IndexRange--module.exports..IndexRange.sort) ⇒ <code>Array.&lt;IndexRange&gt;</code>
                * [.compact(ranges)](#module_IndexRange--module.exports..IndexRange.compact) ⇒ <code>Array.&lt;IndexRange&gt;</code>
                * [.subtract(ranges, range)](#module_IndexRange--module.exports..IndexRange.subtract) ⇒ <code>Array.&lt;IndexRange&gt;</code>

<a name="exp_module_IndexRange--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
**this**: <code>{IndexRange}</code>  
<a name="new_module_IndexRange--module.exports_new"></a>

#### new module.exports(start, end)
Create an instance of IndexRange.
Stores a range of unsigned integers.
Expects integers in the range 0 <= n <= 9007199254740991.
Behavior for negative numbers is undefined.


| Param | Type | Description |
| --- | --- | --- |
| start | <code>Number</code> &#124; <code>string</code> | Start index. |
| end | <code>Number</code> &#124; <code>string</code> | End index. |

<a name="module_IndexRange--module.exports..IndexRange"></a>

#### module.exports~IndexRange
**Kind**: inner class of <code>[module.exports](#exp_module_IndexRange--module.exports)</code>  

* [~IndexRange](#module_IndexRange--module.exports..IndexRange)
    * _instance_
        * [.start()](#module_IndexRange--module.exports..IndexRange+start) ⇒ <code>Number</code>
        * [.end()](#module_IndexRange--module.exports..IndexRange+end) ⇒ <code>Number</code>
        * [.length()](#module_IndexRange--module.exports..IndexRange+length) ⇒ <code>Number</code>
        * [.join(range)](#module_IndexRange--module.exports..IndexRange+join) ⇒ <code>IndexRange</code> &#124; <code>undefined</code>
        * [.contains(idx)](#module_IndexRange--module.exports..IndexRange+contains) ⇒ <code>Boolean</code>
        * [.equals(range)](#module_IndexRange--module.exports..IndexRange+equals) ⇒ <code>Boolean</code>
        * [.overlaps(range)](#module_IndexRange--module.exports..IndexRange+overlaps) ⇒ <code>Boolean</code>
        * [.contiguous(range)](#module_IndexRange--module.exports..IndexRange+contiguous) ⇒ <code>Boolean</code>
        * [.toString()](#module_IndexRange--module.exports..IndexRange+toString) ⇒ <code>string</code>
    * _static_
        * [.fromString(str)](#module_IndexRange--module.exports..IndexRange.fromString)
        * [.sort()](#module_IndexRange--module.exports..IndexRange.sort) ⇒ <code>Array.&lt;IndexRange&gt;</code>
        * [.compact(ranges)](#module_IndexRange--module.exports..IndexRange.compact) ⇒ <code>Array.&lt;IndexRange&gt;</code>
        * [.subtract(ranges, range)](#module_IndexRange--module.exports..IndexRange.subtract) ⇒ <code>Array.&lt;IndexRange&gt;</code>

<a name="module_IndexRange--module.exports..IndexRange+start"></a>

##### indexRange.start() ⇒ <code>Number</code>
Get first index of range.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>Number</code> - - Index.  
<a name="module_IndexRange--module.exports..IndexRange+end"></a>

##### indexRange.end() ⇒ <code>Number</code>
Get last index of range.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>Number</code> - - Index.  
<a name="module_IndexRange--module.exports..IndexRange+length"></a>

##### indexRange.length() ⇒ <code>Number</code>
Get total length of range.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>Number</code> - - Length.  
<a name="module_IndexRange--module.exports..IndexRange+join"></a>

##### indexRange.join(range) ⇒ <code>IndexRange</code> &#124; <code>undefined</code>
Join two overlapping or contiguous ranges.
If ranges do not overlap, returns undefined.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>IndexRange</code> &#124; <code>undefined</code> - - New range.  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>IndexRange</code> | Range to join. |

<a name="module_IndexRange--module.exports..IndexRange+contains"></a>

##### indexRange.contains(idx) ⇒ <code>Boolean</code>
Test if index is in range.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| idx | <code>string</code> &#124; <code>Number</code> | Index to test. |

<a name="module_IndexRange--module.exports..IndexRange+equals"></a>

##### indexRange.equals(range) ⇒ <code>Boolean</code>
Test if ranges are equal.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>IndexRange</code> | Range to test. |

<a name="module_IndexRange--module.exports..IndexRange+overlaps"></a>

##### indexRange.overlaps(range) ⇒ <code>Boolean</code>
Test if ranges overlap.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>IndexRange</code> | Range to test. |

<a name="module_IndexRange--module.exports..IndexRange+contiguous"></a>

##### indexRange.contiguous(range) ⇒ <code>Boolean</code>
Test if ranges are contiguous but not overlapping.

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>IndexRange</code> | Range to test. |

<a name="module_IndexRange--module.exports..IndexRange+toString"></a>

##### indexRange.toString() ⇒ <code>string</code>
Creates a string representation of IndexRange

**Kind**: instance method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>string</code> - - String representation.  
<a name="module_IndexRange--module.exports..IndexRange.fromString"></a>

##### IndexRange.fromString(str)
Creates an instance of IndexRange from a string rep.
If string rep is invalid, returns undefined.

**Kind**: static method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**this**: <code>{IndexRange}</code>  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Valid string representation. |

<a name="module_IndexRange--module.exports..IndexRange.sort"></a>

##### IndexRange.sort() ⇒ <code>Array.&lt;IndexRange&gt;</code>
Sort an array of IndexRanges

**Kind**: static method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>Array.&lt;IndexRange&gt;</code> - - Sorted ranges.  
<a name="module_IndexRange--module.exports..IndexRange.compact"></a>

##### IndexRange.compact(ranges) ⇒ <code>Array.&lt;IndexRange&gt;</code>
Sort and combine overlapping ranges and return the results.

**Kind**: static method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>Array.&lt;IndexRange&gt;</code> - - Compacted, sorted ranges.  

| Param | Type | Description |
| --- | --- | --- |
| ranges | <code>Array.&lt;IndexRange&gt;</code> | Ranges to compact. |

<a name="module_IndexRange--module.exports..IndexRange.subtract"></a>

##### IndexRange.subtract(ranges, range) ⇒ <code>Array.&lt;IndexRange&gt;</code>
Sort and subtract a range from a set of ranges.
Performs the opposite of .compact().

**Kind**: static method of <code>[IndexRange](#module_IndexRange--module.exports..IndexRange)</code>  
**Returns**: <code>Array.&lt;IndexRange&gt;</code> - - Sorted ranges, minus range.  

| Param | Type | Description |
| --- | --- | --- |
| ranges | <code>Array.&lt;IndexRange&gt;</code> | Ranges to subtract range from. |
| range | <code>IndexRange</code> | Range to subtract. |


---

