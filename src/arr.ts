function array_chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) throw new Error("Chunk size must be greater than 0");
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function array_diff<T>(arr: T[], ...others: T[][]): T[] {
  const otherValues = new Set(others.flat());
  return arr.filter(x => !otherValues.has(x));
}

function array_intersect<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  return arrays[0].filter(item => arrays.every(arr => arr.includes(item)));
}

function array_merge<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

function in_array<T>(needle: T, haystack: T[]): boolean {
  return haystack.includes(needle);
}

function array_key_exists(key: number, arr: unknown[]): boolean {
  return key >= 0 && key < arr.length;
}