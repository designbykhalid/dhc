const path = require('path');

module.exports = {
	directories: function({imagesDestPath, fontsDestPath, apiPath}) {
		return [
            {
                src: 'source/images',
                dest: path.resolve(imagesDestPath)
            },
            {
                src: 'source/fonts',
                dest: path.resolve(fontsDestPath)
            },
            {
                src: 'source/api',
                dest: path.resolve(apiPath)
            }
        ];
	}
}