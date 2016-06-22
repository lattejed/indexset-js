<a name="IndexRange"></a>

## IndexRange
Created by matthew on 6/21/16.

**Kind**: global variable  

* [IndexRange](#IndexRange)
    * _instance_
        * [.start()](#IndexRange+start) ⇒ <code>Number</code>
        * [.end()](#IndexRange+end) ⇒ <code>Number</code>
        * [.length()](#IndexRange+length) ⇒ <code>Number</code>
        * [.join(range)](#IndexRange+join) ⇒ <code>[IndexRange](#IndexRange)</code> &#124; <code>undefined</code>
        * [.contains(idx)](#IndexRange+contains) ⇒ <code>Boolean</code>
        * [.equals(range)](#IndexRange+equals) ⇒ <code>Boolean</code>
        * [.overlaps(range)](#IndexRange+overlaps) ⇒ <code>Boolean</code>
        * [.contiguous(range)](#IndexRange+contiguous) ⇒ <code>Boolean</code>
        * [.toString()](#IndexRange+toString) ⇒ <code>string</code>
    * _static_
        * [.fromString](#IndexRange.fromString)
            * [new IndexRange.fromString(str)](#new_IndexRange.fromString_new)
        * [.sort()](#IndexRange.sort) ⇒ <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code>
        * [.compact(ranges)](#IndexRange.compact) ⇒ <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code>
        * [.subtract(ranges, range)](#IndexRange.subtract) ⇒ <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code>

<a name="IndexRange+start"></a>

### indexRange.start() ⇒ <code>Number</code>
Get first index of range.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>Number</code> - - Index.  
<a name="IndexRange+end"></a>

### indexRange.end() ⇒ <code>Number</code>
Get last index of range.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>Number</code> - - Index.  
<a name="IndexRange+length"></a>

### indexRange.length() ⇒ <code>Number</code>
Get total length of range.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>Number</code> - - Length.  
<a name="IndexRange+join"></a>

### indexRange.join(range) ⇒ <code>[IndexRange](#IndexRange)</code> &#124; <code>undefined</code>
Join two overlapping or contiguous ranges.
If ranges do not overlap, returns undefined.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>[IndexRange](#IndexRange)</code> &#124; <code>undefined</code> - - New range.  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>[IndexRange](#IndexRange)</code> | Range to join. |

<a name="IndexRange+contains"></a>

### indexRange.contains(idx) ⇒ <code>Boolean</code>
Test if index is in range.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| idx | <code>string</code> &#124; <code>Number</code> | Index to test. |

<a name="IndexRange+equals"></a>

### indexRange.equals(range) ⇒ <code>Boolean</code>
Test if ranges are equal.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>[IndexRange](#IndexRange)</code> | Range to test. |

<a name="IndexRange+overlaps"></a>

### indexRange.overlaps(range) ⇒ <code>Boolean</code>
Test if ranges overlap.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>[IndexRange](#IndexRange)</code> | Range to test. |

<a name="IndexRange+contiguous"></a>

### indexRange.contiguous(range) ⇒ <code>Boolean</code>
Test if ranges are contiguous but not overlapping.

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  

| Param | Type | Description |
| --- | --- | --- |
| range | <code>[IndexRange](#IndexRange)</code> | Range to test. |

<a name="IndexRange+toString"></a>

### indexRange.toString() ⇒ <code>string</code>
Creates a string representation of IndexRange

**Kind**: instance method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>string</code> - - String representation.  
<a name="IndexRange.fromString"></a>

### IndexRange.fromString
**Kind**: static class of <code>[IndexRange](#IndexRange)</code>  
**this**: <code>{IndexRange}</code>  
<a name="new_IndexRange.fromString_new"></a>

#### new IndexRange.fromString(str)
Creates an instance of IndexRange from a string rep.
If string rep is invalid, returns undefined.


| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | Valid string representation. |

<a name="IndexRange.sort"></a>

### IndexRange.sort() ⇒ <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code>
Sort an array of IndexRanges

**Kind**: static method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code> - - Sorted ranges.  
<a name="IndexRange.compact"></a>

### IndexRange.compact(ranges) ⇒ <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code>
Sort and combine overlapping ranges and return the results.

**Kind**: static method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code> - - Compacted, sorted ranges.  

| Param | Type | Description |
| --- | --- | --- |
| ranges | <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code> | Ranges to compact. |

<a name="IndexRange.subtract"></a>

### IndexRange.subtract(ranges, range) ⇒ <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code>
Sort and subtract a range from a set of ranges.
Performs the opposite of .compact().

**Kind**: static method of <code>[IndexRange](#IndexRange)</code>  
**Returns**: <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code> - - Sorted ranges, minus range.  

| Param | Type | Description |
| --- | --- | --- |
| ranges | <code>[Array.&lt;IndexRange&gt;](#IndexRange)</code> | Ranges to subtract range from. |
| range | <code>[IndexRange](#IndexRange)</code> | Range to subtract. |

