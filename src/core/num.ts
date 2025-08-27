/**
 * @package    handy-utils
 * @file       num.ts
 * @description Utility functions for working with numbers (e.g. is_float, number_format, etc.)
 *
 * @author     Olushola (Geeky Geeky)
 * @license    MIT
 * @version    1.0.0
 */

export const is_float = (value: unknown): boolean => {
    return typeof value === "number" && !Number.isInteger(value) && !Number.isNaN(value);
}

export const number_format = (number: number, decimals = 0, decPoint = ".", thousandsSep = ","): string => {
    const fixed = number.toFixed(decimals);
    const parts = fixed.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
    return parts.join(decPoint);
}
function is_nan(value: unknown): boolean {
    return typeof value === "number" && Number.isNaN(value);
}

function is_positive(value: number): boolean {
    return typeof value === "number" && value > 0;
}

function is_negative(value: number): boolean {
    return typeof value === "number" && value < 0;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function round(value: number, decimals = 0): number {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
