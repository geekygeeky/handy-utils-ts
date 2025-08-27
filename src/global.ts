/**
 * @package    handy-utils
 * @file       global.ts
 * @description Global utility functions for working with string, arrays and numbers
 *
 * @author     Olushola (Geeky Geeky)
 * @license    MIT
 * @version    1.0.0
 */


/**
 *  ---- Global ----
 */
export const __$ensureGlobalPatch = true;
declare global {
    interface String {
        $capitalize(): string;
        $reverse(): string;
    }
    interface Number {
        $isEven(): boolean;
        $isOdd(): boolean;
        $clamp(min: number, max: number): number;
    }
    interface Array<T> {
        $first(): T | undefined;
        $last(): T | undefined;
        $unique(): T[];
        $chunk(size: number): T[][];
    }
}

// String
if (!String.prototype.$capitalize) {
    String.prototype.$capitalize = function (): string {
        return this.length ? this.charAt(0).toUpperCase() + this.slice(1) : this.toLowerCase();
    };
}
if (!String.prototype.$reverse) {
    String.prototype.$reverse = function (): string {
        return [...this.toString()].reverse().join("");
    };
}

// Number
if (!Number.prototype.$isEven) {
    Number.prototype.$isEven = function (): boolean {
        return this.valueOf() % 2 === 0;
    };
}
if (!Number.prototype.$isOdd) {
    Number.prototype.$isOdd = function (): boolean {
        return this.valueOf() % 2 !== 0;
    };
}
if (!Number.prototype.$clamp) {
    Number.prototype.$clamp = function (min: number, max: number): number {
        return Math.min(Math.max(this.valueOf(), min), max);
    };
}

// Array
if (!Array.prototype.$first) {
    Array.prototype.$first = function <T>(): T | undefined {
        return this[0];
    };
}
if (!Array.prototype.$last) {
    Array.prototype.$last = function <T>(): T | undefined {
        return this[this.length - 1];
    };
}
if (!Array.prototype.$unique) {
    Array.prototype.$unique = function <T>(): T[] {
        return [...new Set<T>(this)];
    };
}
if (!Array.prototype.$chunk) {
    Array.prototype.$chunk = function <T>(size: number): T[][] {
        if (size <= 0) return [];
        const res: T[][] = [];
        for (let i = 0; i < this.length; i += size) {
            res.push(this.slice(i, i + size));
        }
        return res;
    };
}
