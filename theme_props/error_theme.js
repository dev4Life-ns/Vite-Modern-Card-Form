import { extendTheme } from '@mui/joy'

/**
 * `errorTheme` is an object that extends the theme for the JoyTypography and JoyAspectRatio components.
 * It is exported for use in other parts of the application.
 *
 * @typedef {Object} errorTheme
 * @property {Object} components - Contains the components for the theme.
 * @property {Object} components.JoyTypography - Contains the properties for the JoyTypography component.
 * @property {Object} components.JoyTypography.defaultProps - Contains the default properties for the JoyTypography component.
 * @property {string} components.JoyTypography.defaultProps.textAlign - The text alignment for the JoyTypography component.
 * @property {number} components.JoyTypography.defaultProps.mt - The top margin for the JoyTypography component.
 * @property {Object} components.JoyAspectRatio - Contains the properties for the JoyAspectRatio component.
 * @property {Object} components.JoyAspectRatio.defaultProps - Contains the default properties for the JoyAspectRatio component.
 * @property {number} components.JoyAspectRatio.defaultProps.ratio - The aspect ratio for the JoyAspectRatio component.
 * @property {string} components.JoyAspectRatio.defaultProps.objectFit - The object fit property for the JoyAspectRatio component.
 * @property {Object} components.JoyAspectRatio.defaultProps.sx - Contains the styling properties for the JoyAspectRatio component.
 * @property {number} components.JoyAspectRatio.defaultProps.sx.mt - The top margin for the JoyAspectRatio component.
 */

export const errorTheme =  extendTheme({
	components:{
		JoyTypography:{
			defaultProps:{
				textAlign: 'center',
				mt: 4,
			}
		},
		JoyAspectRatio:{
			defaultProps:{
				ratio: 4/2,
				objectFit:'contain',
				color:'none',
				sx:{
					mt:4,
			}
		},
		},
	}
})