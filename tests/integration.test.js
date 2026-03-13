import { describe, it } from 'node:test';
import assert from 'node:assert';
import { ESLint } from 'eslint';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { readFile } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

async function lintFile(configPath, filePath) {
    const eslint = new ESLint({
        overrideConfigFile: resolve(root, configPath),
    });
    const results = await eslint.lintFiles([resolve(root, filePath)]);
    return results[0];
}

function getRuleIds(result) {
    return result.messages.map(m => m.ruleId);
}

describe('Node config integration', () => {

    it('should lint the node example and report expected rules', async () => {
        const result = await lintFile('examples/node/eslint.config.js', 'examples/node/src/index.js');
        const ruleIds = getRuleIds(result);

        // These rules should fire on the example code
        assert.ok(ruleIds.includes('no-unused-vars'), 'Expected no-unused-vars to fire');
        assert.ok(ruleIds.includes('unicorn/prefer-node-protocol'), 'Expected unicorn/prefer-node-protocol to fire');
        assert.ok(ruleIds.includes('padding-line-between-statements'), 'Expected padding-line-between-statements to fire');
        assert.ok(ruleIds.includes('@stylistic/lines-between-class-members'), 'Expected @stylistic/lines-between-class-members to fire');

        // No fatal (config) errors
        const fatalErrors = result.messages.filter(m => m.fatal);
        assert.strictEqual(fatalErrors.length, 0, `Fatal errors: ${JSON.stringify(fatalErrors)}`);
    });

});

describe('TypeScript config integration', () => {

    it('should lint the typescript example and report expected rules', async () => {
        const result = await lintFile('examples/typescript/eslint.config.js', 'examples/typescript/src/test.ts');
        const ruleIds = getRuleIds(result);

        assert.ok(ruleIds.includes('@typescript-eslint/explicit-function-return-type'), 'Expected explicit-function-return-type to fire');
        assert.ok(ruleIds.includes('@typescript-eslint/no-magic-numbers'), 'Expected no-magic-numbers to fire');
        assert.ok(ruleIds.includes('@typescript-eslint/no-unused-vars'), 'Expected no-unused-vars to fire');
        assert.ok(ruleIds.includes('@stylistic/no-extra-parens'), 'Expected @stylistic/no-extra-parens to fire');

        const fatalErrors = result.messages.filter(m => m.fatal);
        assert.strictEqual(fatalErrors.length, 0, `Fatal errors: ${JSON.stringify(fatalErrors)}`);
    });

});

describe('React config integration', () => {

    it('should lint the react example and report expected rules', async () => {
        const result = await lintFile('examples/react/eslint.config.js', 'examples/react/src/index.jsx');
        const ruleIds = getRuleIds(result);

        assert.ok(ruleIds.includes('@polymath_labs/react/no-inline-styles'), 'Expected no-inline-styles to fire');
        assert.ok(ruleIds.includes('react/jsx-wrap-multilines'), 'Expected react/jsx-wrap-multilines to fire');
        assert.ok(ruleIds.includes('@stylistic/no-multiple-empty-lines'), 'Expected @stylistic/no-multiple-empty-lines to fire');

        const fatalErrors = result.messages.filter(m => m.fatal);
        assert.strictEqual(fatalErrors.length, 0, `Fatal errors: ${JSON.stringify(fatalErrors)}`);
    });

    it('should flag inline styles as errors', async () => {
        const eslint = new ESLint({
            overrideConfigFile: resolve(root, 'examples/react/eslint.config.js'),
        });
        const results = await eslint.lintText(
            `export const App = () => <div style={{ color: 'red' }}>hello</div>;\n`,
            { filePath: 'test.jsx' }
        );
        const ruleIds = results[0].messages.map(m => m.ruleId);
        assert.ok(ruleIds.includes('@polymath_labs/react/no-inline-styles'), 'Expected inline styles to be flagged');
    });

    it('should not flag className as inline styles', async () => {
        const eslint = new ESLint({
            overrideConfigFile: resolve(root, 'examples/react/eslint.config.js'),
        });
        const results = await eslint.lintText(
            `export const App = () => <div className="test">hello</div>;\n`,
            { filePath: 'test.jsx' }
        );
        const ruleIds = results[0].messages.map(m => m.ruleId);
        assert.ok(!ruleIds.includes('@polymath_labs/react/no-inline-styles'), 'className should not trigger no-inline-styles');
    });

});
