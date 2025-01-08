# Unexpected NaN Result in JavaScript Function

This repository demonstrates a common JavaScript error: improper handling of `null` and `undefined` values.

The `foo` function adds two numbers.  However, it only explicitly checks for `null`, causing unexpected behavior when `undefined` is passed.  This leads to `NaN` (Not a Number) instead of a more appropriate result.

The solution demonstrates how to correctly handle both `null` and `undefined` to prevent this issue.

## Bug
The original code incorrectly handles `undefined` values. 

## Solution
The solution modifies the function to explicitly check for both `null` and `undefined`, returning 0 in either case.  This ensures consistent behavior and prevents `NaN` errors. 