
import { extendTheme } from '@mui/joy'
import  ErrorIcon from '@mui/icons-material/Error'


/**
 * `formContent` is an object that extends the theme for the JoyCardContent component.
 * @typedef {Object} formContent
 * @property {Object} components - Contains the components for the theme.
 * @property {Object} components.JoyCardContent - Contains the properties for the JoyCardContent component.
 * @property {Object} components.JoyCardContent.defaultProps - Contains the default properties for the JoyCardContent component.
 * @property {Object} components.JoyCardContent.defaultProps.sx - Contains the styling properties for the JoyCardContent component.
 */


/**
 * `fullFormLayout` is an object that extends the theme for the form layout.
 * @typedef {Object} fullFormLayout
 * @property {Object} colorSchemes - Contains the color schemes for the theme.
 * @property {Object} colorSchemes.light - Contains the light color scheme.
 * @property {Object} colorSchemes.light.palette - Contains the color palette for the light color scheme.
 * @property {Object} components - Contains the components for the theme.
 * @property {Object} components.JoyCardContent - Contains the properties for the JoyCardContent component.
 * @property {Object} components.JoyCardContent.defaultProps - Contains the default properties for the JoyCardContent component.
 * @property {Object} components.JoyCardContent.defaultProps.sx - Contains the styling properties for the JoyCardContent component.
 * @property {Object} components.JoyTypography - Contains the properties for the JoyTypography component.
 * @property {Object} components.JoyTypography.defaultProps - Contains the default properties for the JoyTypography component.
 * @property {Object} components.JoyTypography.defaultProps.sx - Contains the styling properties for the JoyTypography component.
 * @property {Object} components.JoyButton - Contains the properties for the JoyButton component.
 * @property {Object} components.JoyButton.defaultProps - Contains the default properties for the JoyButton component.
 * @property {Object} components.JoyButton.defaultProps.sx - Contains the styling properties for the JoyButton component.
 * @property {Object} components.JoyInput - Contains the properties for the JoyInput component.
 * @property {Object} components.JoyInput.defaultProps - Contains the default properties for the JoyInput component.
 */

export const fullFormLayout = extendTheme ( {
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
				danger: {
					50:  '#FCE4EC',
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
			},
		},
	},
	components: {
		JoyCardContent: {
			defaultProps: {
				sx: {
					display: 'grid',
					gap: 2,
					mx: 'auto',
					height: 'auto',
					mt: 4,
					gridTemplateColumns: 'repeat(6, minmax(70px, 1fr))',
				}
			}
		},
		JoyTypography: {
			defaultProps:{
				level: 'body-xs',
				component: 'p',
				color: 'danger',
				startDecorator: <ErrorIcon />,
			sx:{
				mt:.7,
				ml:.5,
			}
			}
		},
		JoyButton: {
			defaultProps: {
				variant: 'soft',
				sx: {
					my: 3,
					height: 50,
					borderRadius: 20,
					gridColumn: '1/-1',
				}
			}
		},
		JoyInput:{
			defaultProps:{
				autoComplete: 'on',
				size: 'lg',
				}
			},
		},
} )


export const characterCounterTypography = extendTheme({
	components:{
		JoyTypography:{
			defaultProps:{
				level: 'body-md',
				color: 'neutral',
				sx:{
					ml:'auto',
				}
			}
		}   
	}
})


export  const checkboxTerms = extendTheme({
	components:{
		JoyTypography:{
			defaultProps:{
				color: 'neutral',
				level: 'body-md',
				sx:{
					mt:1,
					ml:1,
				}
			}
		},
		JoyLink:{
			defaultProps:{
				color: 'primary',
				level: 'body-md',
				}
			}
		}
})



