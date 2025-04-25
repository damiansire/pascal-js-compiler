import { compile, PascalCompiler } from './index';

describe('PascalCompiler', () => {
    it('should compile basic Pascal code', () => {
        const pascalCode = `
      program HelloWorld;
      begin
        writeln('Hello, world!');
      end.
    `;

        const result = compile(pascalCode);
        expect(result).toContain('console.log');
    });

    it('should work with PascalCompiler class', () => {
        const compiler = new PascalCompiler();
        const pascalCode = `
      program Test;
      begin
        writeln('Test');
      end.
    `;

        const result = compiler.compile(pascalCode);
        expect(result).toContain('console.log');
    });
}); 