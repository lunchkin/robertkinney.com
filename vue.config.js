// eslint-disable-next-line no-undef
module.exports = {
	transpileDependencies: true,

	css: {
		loaderOptions: {
			sass: {
				additionalData: "@import \"@/assets/scss/_variables.scss\";",
			},
		},
	},
};
