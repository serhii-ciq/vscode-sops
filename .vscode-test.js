const { defineConfig } = require('@vscode/test-cli');

module.exports = defineConfig([
	{
		extensionDevelopmentPath: '.',
		files: 'out/test/**/*.test.js',
		workspaceFolder: './test/workspace',
		mocha: {
			ui: 'tdd',
			timeout: 20000,
		},
	},
]);
