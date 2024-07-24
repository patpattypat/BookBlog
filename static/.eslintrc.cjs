const path = require("path");
const severityLevel = 'off';

module.exports = {
	"extends": "next/core-web-vitals",
	parserOptions: {
		project: path.join(__dirname, 'tsconfig.json'),	
	},
	rules: {
		'jsx-a11y/no-static-element-interactions': [severityLevel],
		'jsx-a11y/click-events-have-key-events': [severityLevel],
	},
}