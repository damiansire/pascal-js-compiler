# Pascal to JavaScript Compiler

A TypeScript library that compiles Pascal code to JavaScript.

## Installation

```bash
npm install pascal-js-compiler
```

## Usage

```typescript
import { compile } from 'pascal-js-compiler';

const pascalCode = `
program HelloWorld;
begin
  writeln('Hello, world!');
end.
`;

const javascriptCode = compile(pascalCode);
console.log(javascriptCode);
```

## Features

- Compiles Pascal code to JavaScript
- Supports basic Pascal syntax
- TypeScript support
- Easy to use API

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Run tests:
   ```bash
   npm test
 