export const capitalize = (str: string): string =>
    str.length ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : str;

export const reverse = (str: string): string => [...str].reverse().join("");

// 2. ucfirst (uppercase first letter, keep rest as-is)
export const ucfirst = (str: string): string => {
    if (!str) return "";
    return str[0].toUpperCase() + str.slice(1);
}

// 3. lcfirst (lowercase first letter, keep rest as-is)
export const lcfirst = (str: string): string => {
    if (!str) return "";
    return str[0].toLowerCase() + str.slice(1);
}

// 14. ucwords (uppercase first letter of each word)
export const ucwords = (str: string): string => {
    return str.replace(/\b\w/g, (c) => c.toUpperCase());
}


// 8. str_pad (pad string to desired length)
// padType: "left", "right", "both"
function str_pad(str: string, length: number, padChar = " ", padType: "left" | "right" | "both" = "right"): string {
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

// 9. str_shuffle (randomly shuffle characters in string)
function str_shuffle(str: string): string {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        // Fisher-Yates shuffle
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
}

// 11. strrev (reverse string)
function strrev(str: string): string {
    return str.split('').reverse().join('');
}

// 12. strip_tags (remove HTML tags)
function strip_tags(str: string): string {
    return str.replace(/<\/?[^>]+(>|$)/g, "");
}

// 13. htmlspecialchars (escape &, <, >, ", ')
// Note: this is a simple version, PHP has ENT_QUOTES etc
function htmlspecialchars(str: string): string {
    const map: Record<string, string> = {
        '&': "&amp;",
        '<': "&lt;",
        '>': "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    };
    return str.replace(/[&<>"']/g, (m) => map[m]);
}

function strcasecmp(a: string, b: string): number {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a === b) return 0;
  return a > b ? 1 : -1;
}

function ltrim(str: string, charlist = "\\s"): string {
  return str.replace(new RegExp(`^[${charlist}]+`), "");
}
function rtrim(str: string, charlist = "\\s"): string {
  return str.replace(new RegExp(`[${charlist}]+$`), "");
}
