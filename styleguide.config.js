const { version } = require('./package');

module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	ignore: ['**/components/**/__test__/*.percy.js'],
	defaultExample: true,
	styleguideDir: 'public',
	ribbon: {
		url: 'https://github.com/styleguidist/react-styleguidist',
	},
	version,
	webpackConfig: {
		devServer: {
			disableHostCheck: true
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader',
				},
			],
		},
	},
};
