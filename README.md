<div align = "center">
   <h1 align = "center">
    handy-utils-ts
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/package/handy-utils-ts">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/handy-utils-ts?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/handy-utils-ts">
    <img alt="Types" src="https://img.shields.io/npm/types/handy-utils-ts?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/handy-utils-ts">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/handy-utils-ts?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="UnLicense" src="https://img.shields.io/npm/l/handy-utils-ts?style=for-the-badge&labelColor=24292e">
  </a>
</p>

---
A **lightweight** and *handy* TypeScript utility library for working with strings, numbers, arrays, and other common operations.

> Supports both **modular usage** and **global prototype extension**, giving you flexibility in how you integrate it into your project.

---

## 📦 Installation

```bash
# npm
npm install handy-utils-ts

# pnpm
pnpm install handy-utils-ts

# yarn
yarn add handy-utils-ts
```

---

## 📚 Table of Contents

- [🔧 Usage](#-usage)

  - [Standard (Modular) Usage](#standard-modular-usage)
  - [Global Usage via tsconfig](#global-usage-via-tsconfig)

- [🧰 Features](#-features)

  - [String Utilities](#string-utilities)
  - [Number Utilities](#number-utilities)
  - [Array Utilities](#array-utilities)
  - [Miscellaneous](#miscellaneous)

- [⚙️ Configuration for Global Usage](#️-configuration-for-global-usage)
- [📗 TypeScript Support](#-typescript-support)
- [🧪 Testing](#-testing)
- [📄 License](#-license)

---

## 🔧 Usage

### Standard (Modular) Usage

You can import utilities individually for better tree-shaking and clarity:

```ts
import { capitalize } from "handy-utils-ts/str";
import { clamp } from "handy-utils-ts/num";
import { unique } from "handy-utils-ts/arr";

console.log(capitalize("hello world")); // Hello world
console.log(clamp(10, 0, 5)); // 5
console.log(unique([1, 2, 2, 3])); // [1, 2, 3]
```

---

### Global Usage via tsconfig

If you prefer using utilities directly on native types (like `"hello".$capitalize()`), you can enable **global augmentation**.

#### Step 1: Update `tsconfig.json`

```json
{
  "compilerOptions": {
    "types": ["handy-utils-ts/global"]
  }
}
```

#### Step 2: Use Globally Augmented Methods

```ts
const name = "john doe";
console.log(name.$capitalize()); // John doe

const nums = [1, 2, 2, 3];
console.log(nums.$unique()); // [1, 2, 3]

const score = 110;
console.log(score.$clamp(0, 100)); // 100
```

> ⚠️ Prototype methods are prefixed with `$` to avoid conflicts with native methods.

---

## 🧰 Features

### String Utilities

- `capitalize(str)`
- `camelCase(str)`
- `kebabCase(str)`
- `snakeCase(str)`
- `truncate(str, length)`
- **Global equivalents:**

    - `"example".$capitalize()`
    - `"some text".$camelCase()`

### Number Utilities

- `clamp(num, min, max)`
- `isEven(num)`
- `isOdd(num)`
- `random(min, max)`
- **Global equivalents:**

    - `42.$isEven()`
    - `100.$clamp(0, 50)`

### Array Utilities

- `unique(arr)`
- `chunk(arr, size)`
- `flatten(arr)`
- `compact(arr)`
- **Global equivalents:**

    - `[1, 2, 2].$unique()`
    - `[1, [2, 3]].$flatten()`

### Miscellaneous

- `sleep(ms)`
- `deepClone(obj)`
- `isEmpty(value)`
- `debounce(fn, delay)`
- `throttle(fn, delay)`

---

## ⚙️ Configuration for Global Usage

Global augmentation is **opt-in** and **non-invasive**, designed for ergonomics without affecting native behavior.

### TypeScript Compatibility

Global methods are added through module augmentation and are fully typed. You get autocomplete and type safety for:

- `string.$capitalize()`
- `number.$clamp(...)`
- `array.$unique()`

### Example tsconfig snippet

```json
{
  "compilerOptions": {
    "types": ["handy-utils-ts/global"],
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "Node"
  }
}
```

---

## 🧪 Testing

This library is tested with modern TypeScript and includes comprehensive unit tests.

You can run tests using:

```bash
npm test
```

## 🛠️ Contributing

Contributions are welcome! Whether it's a bug fix, new utility, or improvement. All PRs are appreciated.

### Steps to Contribute

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/handy-utils-ts.git
    ```

3. **Create a new branch** for your feature or fix:

   ```bash
   git checkout -b feature/my-awesome-feature
   ```
4. **Write tests** for any new functions
5. **Commit** your changes:

   ```bash
   git commit -m "Add: my-awesome-feature"
   ```
6. **Push** to your fork:

   ```bash
   git push origin feature/my-awesome-feature
   ```
7. **Open a Pull Request** on the main repo

### Guidelines

* Keep functions atomic and reusable
* Use TypeScript and type definitions
* Add unit tests for every new utility
* Maintain naming conventions (`$` prefix for globals)

Thank you for helping make this project better! 🚀

---


## 📄 License
MIT © 2025 \[Olushola (GeekyGeeky)]

