export default {
	plugins: {
		'@tailwindcss/postcss': {
			config: './tailwind.config.js',
			theme: true,
			components: true,
			utilities: true
		},
		autoprefixer: {}
	}
};
