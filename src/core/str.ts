/**
 * @package    handy-utils
 * @file       str.ts
 * @description Utility functions for working with strings (e.g. capitalize, ucfirst, etc.)
 *
 * @author     Olushola (Geeky Geeky)
 * @license    MIT
 * @version    1.0.0
 */

export const capitalize = (str: string): string =>
    str.length ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;

export const reverse = (str: string): string => [...str].reverse().join("");

// * ucfirst (uppercase first letter, keep rest as-is)
export const uc_first = (str: string): string => {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
}

// * lcfirst (lowercase first letter, keep rest as-is)
export const lc_first = (str: string): string => {
    if (!str) return "";
    return str[0].toLowerCase() + str.slice(1);
}

// * uppercase first letter of each word
export const uc_words = (str: string): string => {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
}


// * str_pad (pad string to desired length)
// * padType: "left", "right", "both"
export const str_pad = (str: string, length: number, padChar = " ", padType: "left" | "right" | "both" = "right"): string => {
    const strLen = str.length;
    if (strLen >= length) return str;

    const padLength = length - strLen;

    switch (padType) {
        case "left":
            return padChar.repeat(padLength) + str;
        case "right":
            return str + padChar.repeat(padLength);
        case "both":
            const leftPad = Math.floor(padLength / 2);
            const rightPad = padLength - leftPad;
            return padChar.repeat(leftPad) + str + padChar.repeat(rightPad);
    }
}

// * randomly shuffle characters in string
export const str_shuffle = (str: string): string => {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        // Fisher-Yates shuffle
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

export const str_rev = (str: string): string => {
    return str.split('').reverse().join('');
}

// * strip_tags (remove HTML tags)
export const strip_tags = (str: string): string => {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}

// * html_special_chars (escape &, <, >, ", ')
export const html_special_chars = (str: string): string => {
    const map: Record<string, string> = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return str.replace(/[&<>"']/g, (m) => map[m]);
}

export const str_case_cmp = (a: string, b: string): number => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a === b) return 0;
    return a > b ? 1 : -1;
}

export const ltrim = (str: string, charlist = "\\s"): string => {
    return str.replace(new RegExp(`^[${charlist}]+`), "");
}
export const rtrim = (str: string, charlist = "\\s"): string => {
    return str.replace(new RegExp(`[${charlist}]+$`), "");
}

export const camel_case = (str: string): string => {
    return str
        .trim()
        .toLowerCase()
        .split(/[\s_-]+/)
        .map((word, index) =>
            index === 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

export const kebab_case = (str: string): string => {
    return str
        .trim()
        .toLowerCase()
        .replace(/[\s_]+/g, '-')
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/-+/g, '-');
}

export const snake_case = (str: string): string => {
    return str
        .trim()
        .toLowerCase()
        .replace(/[\s-]+/g, '_')
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/_+/g, '_');
}

export const truncate = (str: string, maxLength: number): string => {
    str = str.trim();
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength).trimEnd() + '…';
}

/**
 * @desc convert string camel-case to kebab case.
 * @example camel_case_to_kebab("geekyGeeky")
 * @result geeky-geeky
 */
export const camel_case_to_kebab = (str: string): string => {
    return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}