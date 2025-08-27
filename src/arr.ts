/**
 * @package    handy-utils
 * @file       arr.ts
 * @description Utility functions for working with arrays (e.g. chunking, merging, etc.)
 *
 * @author     Olushola (Geeky Geeky)
 * @license    MIT
 * @version    1.0.0
 */

export const array_chunk = <T>(arr: T[], size: number): T[][] => {
    if (size <= 0) throw new Error("Chunk size must be greater than 0");
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

export const array_diff = <T>(arr: T[], ...others: T[][]): T[] => {
    const otherValues = new Set(others.flat());
    return arr.filter((x) => !otherValues.has(x));
};

export const array_intersect = <T>(...arrays: T[][]): T[] => {
    if (arrays.length === 0) return [];
    return arrays[0].filter((item) => arrays.every((arr) => arr.includes(item)));
};

export const array_key_exists = (key: number, arr: unknown[]): boolean => {
    return key >= 0 && key < arr.length;
};

export const unique = <T>(arr: T[]): T[] => [...new Set(arr)];
