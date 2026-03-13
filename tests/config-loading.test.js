import { describe, it } from 'node:test';
import assert from 'node:assert';
import { ESLint } from 'eslint';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

describe('Config loading', () => {

    it('should load the node config without errors', async () => {
        const eslint = new ESLint({
            overrideConfigFile: resolve(root, 'examples/node/eslint.config.js'),
        });
        const results = await eslint.lintFiles([resolve(root, 'examples/node/src/index.js')]);
        assert.ok(Array.isArray(results), 'Expected results to be an array');
        assert.strictEqual(results.length, 1, 'Expected exactly one result');
        const fatalErrors = results[0].messages.filter(m => m.fatal);
        assert.strictEqual(fatalErrors.length, 0, `Fatal errors found: ${JSON.stringify(fatalErrors)}`);
    });

    it('should load the typescript config without errors', async () => {
        const eslint = new ESLint({
            overrideConfigFile: resolve(root, 'examples/typescript/eslint.config.js'),
        });
        const results = await eslint.lintFiles([resolve(root, 'examples/typescript/src/test.ts')]);
        assert.ok(Array.isArray(results), 'Expected results to be an array');
        assert.strictEqual(results.length, 1, 'Expected exactly one result');
        const fatalErrors = results[0].messages.filter(m => m.fatal);
        assert.strictEqual(fatalErrors.length, 0, `Fatal errors found: ${JSON.stringify(fatalErrors)}`);
    });

    it('should load the react config without errors', async () => {
        const eslint = new ESLint({
            overrideConfigFile: resolve(root, 'examples/react/eslint.config.js'),
        });
        const results = await eslint.lintFiles([resolve(root, 'examples/react/src/index.jsx')]);
        assert.ok(Array.isArray(results), 'Expected results to be an array');
        assert.strictEqual(results.length, 1, 'Expected exactly one result');
        const fatalErrors = results[0].messages.filter(m => m.fatal);
        assert.strictEqual(fatalErrors.length, 0, `Fatal errors found: ${JSON.stringify(fatalErrors)}`);
    });

});
