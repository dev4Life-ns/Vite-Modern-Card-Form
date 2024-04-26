import { extendTheme } from '@mui/joy'

/**
 * `welcomeScreenTheme` is a constant that holds the theme configuration for the welcome screen.
 * It is created by calling the `extendTheme` function from the `@mui/joy` package.
 * The `extendTheme` function is used to customize the default theme provided by the Joy UI library.
 * The argument passed to `extendTheme` is an object that specifies the customizations to be made to the theme.
 * The `components` property of this object is used to define customizations for specific components.
 * In this case, a customization for the `JoyAspectRatio` component is defined.
 *
 * @typedef {Object} welcomeScreenTheme
 * @property {Object} components - Contains the customizations for specific components.
 * @property {Object} components.JoyAspectRatio - Contains the customizations for the JoyAspectRatio component.
 * @property {Object} components.JoyAspectRatio.defaultProps - Contains the default properties for the JoyAspectRatio component.
 * @property {number} components.JoyAspectRatio.defaultProps.ratio - The aspect ratio of the JoyAspectRatio component.
 * @property {Object} components.JoyAspectRatio.defaultProps.sx - Contains the style properties for the JoyAspectRatio component.
 * @property {string} components.JoyAspectRatio.defaultProps.sx.width - The width of the JoyAspectRatio component.
 * @property {number} components.JoyAspectRatio.defaultProps.sx.mb - The margin-bottom of the JoyAspectRatio component.
 */

export const welcomeScreenTheme = extendTheme({
	components:{
		JoyAspectRatio:{
			defaultProps:{
				ratio: 4/2,
				sx:{
					width: 'auto',
					mb: 3,
				}
			}
		}
	}
})