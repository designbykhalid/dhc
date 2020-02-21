module.exports = {
	name: 'serve',
	plugins: [
		{
			name: '@deg-skeletor/plugin-express',
			config: {
				port: process.env.PORT || 3001,
				https: false,
				entryPoints: [
					{
						entry: '../app',
						route: '/'
					}
				],
				currentDirectory: __dirname,
				middleware: []
			}
		}
	]
};