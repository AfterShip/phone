import { test } from 'node:test';
import assert from 'node:assert';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

// Requires `yarn build` first: index.mjs wraps dist/index.js.
test('ESM entry exposes default and named exports', () => {
	const entry = resolve(__dirname, '../index.mjs');
	const out = execFileSync(process.execPath, ['--input-type=module', '-e', `
		import phone, { phone as named, countryPhoneData } from ${JSON.stringify(entry)};
		console.log(JSON.stringify([typeof phone, phone === named, Array.isArray(countryPhoneData), phone('+18175698900').isValid]));
	`]).toString();

	assert.deepStrictEqual(JSON.parse(out), ['function', true, true, true]);
});
