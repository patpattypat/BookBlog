'use strict';

module.exports = {
	printWidth: 160,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'all',
	arrowParens: 'always',
	overrides: [
		{
			files: '*.{json,css,scss}',
			options: {
				tabWidth: 2,
				singleQuote: false,
			},
		},
		{
			files: '*.json',
			options: {
				printWitdth: 999999,
			},
		},
	],
	plugins: [require.resolve('prettier-plugin-organize-imports')],
};