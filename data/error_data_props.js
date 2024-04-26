
/**
 * `errorPageText` is an object that contains the text and properties for the error page.
 * @typedef {Object} errorPageText
 * @property {Object} errorTitle - Contains the title text for the error page.
 * @property {string} errorTitle.title - The title text for the error page.
 * @property {Object} errorProps - Contains the properties for the error title.
 * @property {string} errorProps.level - The heading level for the error title.
 * @property {Object} errorSubText - Contains the subtext for the error page.
 * @property {string} errorSubText.subText - The subtext for the error page.
 * @property {Object} errorSubTextProps - Contains the properties for the error subtext.
 * @property {string} errorSubTextProps.level - The heading level for the error subtext.
 * @property {number} errorSubTextProps.mb - The margin-bottom for the error subtext.
 */

/**
 * `errorImageProps` is an object that contains the properties for the error image.
 * @typedef {Object} errorImageProps
 * @property {string} src - The source path for the error image.
 * @property {string} alt - The alternative text for the error image.
 */


const errorPageText = {
	errorTitle:{
		title: "404 - Page Not Found"
	} ,
	errorProps:{
		level: 'h2',
	},
	errorSubText:{
		subText: "Sorry, the page you are looking for does not exist."
	},
	errorSubTextProps:{
		level: 'h4',
		mb: 7,
	},
}


const errorImageProps = {
	src:'src/assets/404_eye.png',
	alt: '404 Error Image',
}

export{errorPageText,errorImageProps}