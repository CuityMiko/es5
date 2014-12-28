module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		manifest: {
			index: {
                options: {
                    basePath: './',
                    cache: [],
                    network: ['*'],
                    fallback: [],
                    exclude: ['js/baidu.js'],
                    preferOnline: false,
                    verbose: true,
                    timestamp: true
                },
                src: [
                    'js/*.js',
                    'css/*.css',
                    'img/*'
                ],
                dest: 'index.manifest'
			}
		}
	});

	// ���ذ��� 'uglify' ����Ĳ����
	grunt.loadNpmTasks('grunt-manifest');

	// Ĭ�ϱ�ִ�е������б�
	grunt.registerTask('default', ['manifest']);
};