import { extendTheme } from '@mui/joy'
import { createTheme } from '@mui/material'


/**
 * `joyCustomColors` is a constant that holds the theme configuration for the Joy UI library.
 * It is created by calling the `extendTheme` function from the `@mui/joy` package.
 * The `extendTheme` function is used to customize the default theme provided by the Joy UI library.
 * The argument passed to `extendTheme` is an object that specifies the customizations to be made to the theme.
 * The `colorSchemes` property of this object is used to define color schemes for the theme.
 * In this case, a `light` color scheme is defined.
 * Within the `light` color scheme, a `palette` is defined.
 * The `palette` is an object that specifies the colors to be used for different parts of the UI.
 * Each property of the `palette` object represents a different color, and the value of each property is an object that specifies different shades of that color.
 *
 * @typedef {Object} joyCustomColors
 * @property {Object} colorSchemes - Contains the color schemes for the theme.
 * @property {Object} colorSchemes.light - Contains the light color scheme.
 * @property {Object} colorSchemes.light.palette - Contains the color palette for the light color scheme.
 * @property {Object} colorSchemes.light.palette.primary - Contains the primary color shades for the light color scheme.
 * @property {Object} colorSchemes.light.palette.success - Contains the success color shades for the light color scheme.
 * @property {Object} colorSchemes.light.palette.danger - Contains the danger color shades for the light color scheme.
 * @property {Object} colorSchemes.light.palette.neutral - Contains the neutral color shades for the light color scheme.
 */
const joyCustomColors = extendTheme ( {
	colorSchemes: {
		light: {
			palette: {
				primary: {
					50: '#E8EAF6',
					100: '#C5CAE9',
					200: '#9FA8DA',
					300: '#7986CB',
					400: '#5C6BC0',
					500: '#3F51B5',
					600: '#3949AB',
					700: '#303F9F',
					800: '#283593',
					900: '#1A237E'
				},
				success:{
					50: "#e0f7fa",
					100: "#b2ebf2",
					200: "#80deea",
					300: "#4dd0e1",
					400: "#26c6da",
					500: "#00bcd4",
					600: "#00acc1",
					700: "#0097a7",
					800: "#00838f",
					900: "#006064"
				},
			
				danger: {
					50: '#FCE4EC',
					100: '#F8BBD0',
					200: '#F48FB1',
					300: '#F06292',
					400: '#EC407A',
					500: '#E91E63',
					600: '#D81B60',
					700: '#C2185B',
					800: '#AD1457',
					900: '#880E4F'
				},
				

				neutral: {
					50: '#ECEFF1',
					100: '#CFD8DC',
					200: '#B0BEC5',
					300: '#90A4AE',
					400: '#78909C',
					500: '#607D8B',
					600: '#546E7A',
					700: '#455A64',
					800: '#37474F',
					900: '#263238'
				}
			}
		}
	}
} )



/**
 * `materialCustomColors` is a constant that holds the theme configuration for the Material UI library.
 * It is created by calling the `createTheme` function from the `@mui/material` package.
 * The `createTheme` function is used to customize the default theme provided by the Material UI library.
 * The argument passed to `createTheme` is an object that specifies the customizations to be made to the theme.
 * The `palette` property of this object is used to define color schemes for the theme.
 * In this case, a `primary` and `error` color scheme is defined.
 *
 * @typedef {Object} materialCustomColors
 * @property {Object} palette - Contains the color schemes for the theme.
 * @property {Object} palette.primary - Contains the primary color scheme.
 * @property {string} palette.primary.main - Contains the main color for the primary color scheme.
 * @property {Object} palette.error - Contains the error color scheme.
 * @property {string} palette.error.main - Contains the main color for the error color scheme.
 */
const materialCustomColors = createTheme ( {
	palette: {
		primary: {
			main: '#3f51b5',
		},
		error: {
			main: '#e91e63',
		},
	}
} )


export { joyCustomColors, materialCustomColors }




