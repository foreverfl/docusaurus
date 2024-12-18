/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// A replacement of lodash in client code
/**
 * Gets the duplicate values in an array.
 * @param arr The array.
 * @param comparator Compares two values and returns `true` if they are equal
 * (duplicated).
 * @returns Value of the elements `v` that have a preceding element `u` where
 * `comparator(u, v) === true`. Values within the returned array are not
 * guaranteed to be unique.
 */
export function duplicates(arr, comparator = (a, b) => a === b) {
    return arr.filter((v, vIndex) => arr.findIndex((u) => comparator(u, v)) !== vIndex);
}
/**
 * Remove duplicate array items (similar to `_.uniq`)
 * @param arr The array.
 * @returns An array with duplicate elements removed by reference comparison.
 */
export function uniq(arr) {
    // Note: had problems with [...new Set()]: https://github.com/facebook/docusaurus/issues/4972#issuecomment-863895061
    return Array.from(new Set(arr));
}
// TODO 2025: replace by std Object.groupBy ?
// This is a local polyfill with exact same TS signature
// see https://github.com/microsoft/TypeScript/blob/main/src/lib/esnext.object.d.ts
export function groupBy(items, keySelector) {
    const result = {};
    let index = 0;
    for (const item of items) {
        const key = keySelector(item, index);
        result[key] ??= [];
        result[key].push(item);
        index += 1;
    }
    return result;
}
//# sourceMappingURL=jsUtils.js.map