const { files, plugins } = require('../common/css.config.js');

module.exports = {
	name: 'css',
	plugins: [
		{
			name: '@deg-skeletor/plugin-postcss',
			config: {
				files: [
					...files('app/css/')
				],
				plugins
			}
		}
	]
};