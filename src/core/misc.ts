/**
 * @package    handy-utils
 * @file       misc.ts
 * @description Miscellaneous functions for manipulating with numbers, strings and dates (e.g. random_int, format_date, etc.)
 *
 * @author     Olushola (Geeky Geeky)
 * @license    MIT
 * @version    1.0.0
 */

export const random_int = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const is_date = (value: unknown): boolean => {
  return value instanceof Date && !isNaN(value.getTime());
}

export const format_date = (date: Date, withTime = true): string => {
  const pad = (n: number) => n.toString().padStart(2, "0");
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  if (!withTime) return `${y}-${m}-${d}`;
  const h = pad(date.getHours());
  const min = pad(date.getMinutes());
  const s = pad(date.getSeconds());
  return `${y}-${m}-${d} ${h}:${min}:${s}`;
}

export const date_diff_in_days = (date1: Date, date2: Date): number => {
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(diff / msPerDay);
}

export const add_days = (date: Date, days: number): Date => {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

export const is_numeric = (value: unknown): boolean => {
  if (typeof value === 'number') {
    return !Number.isNaN(value) && Number.isFinite(value);
  }
  if (typeof value === 'string') {
    return !isNaN(parseFloat(value)) && isFinite(Number(value.trim()));
  }
  return false;
}

export const parse_number = (value: unknown, fallback = 0): number => {
  if (typeof value === 'number' && !isNaN(value)) {
    return value;
  }
  if (typeof value === 'string') {
    const cleaned = value.trim();
    if (/^[-+]?\d+$/.test(cleaned)) {
      // integer string
      return parseInt(cleaned, 10);
    }
    if (/^[-+]?\d*\.\d+$/.test(cleaned)) {
      // float string
      return parseFloat(cleaned);
    }
  }
  return fallback;
}

export const sum_numbers = (...args: number[]) => args.reduce((prev, curr) => prev + curr, 0);

// debounce
export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// throttle
export const throttle = <T extends (...args: any[]) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void => {
  let lastCall = 0;
  return function (...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

// sleep
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// isEmpty
export const is_empty = (value: any): boolean => {
  if (value == null) return true;

  if (typeof value === 'string') return value.trim().length === 0;

  if (Array.isArray(value)) return value.length === 0;

  if (typeof value === 'object') return Object.keys(value).length === 0;

  return false;
}

// deepClone
export const deep_clone = <T>(obj: T): T => {
  return structuredClone ? structuredClone(obj) : JSON.parse(JSON.stringify(obj));
}
