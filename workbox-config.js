module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,svg,ico,html,png,txt,css,js}'
	],
	swDest: 'build/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};