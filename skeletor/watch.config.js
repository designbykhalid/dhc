module.exports = {
	name: 'watch',
	plugins: [
		{
			name: '@deg-skeletor/plugin-watch',
			config: {
				targets: [
					{
						name: 'css',
						paths: 'source/css/**/*.css',
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: 'build',
								subTasks: ['css']
							}
						]
					},
					{
						name: 'js',
						paths: 'source/js/**/*.js',
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: 'build',
								subTasks: ['js']
							}
						]
					},
					{
						name: 'static',
						paths: ['source/fonts/**/*', 'source/images/**/*'],
						events: ['add', 'change', 'delete'],
						tasks: [
							{
								name: 'build',
								subTasks: ['static']
							}
						]
					}
				]
			}
		}
	]
};