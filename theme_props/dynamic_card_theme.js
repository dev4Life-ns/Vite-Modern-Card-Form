import { extendTheme } from '@mui/joy'
import { blueGrey } from '@mui/material/colors'


const cardImageRatio = {
	flex: '0 0 400px',
	display: 'flex',
	backgroundPosition: 'center',
	backgroundSize: 'cover',
}


const dynamicCardTypography = extendTheme ( {
	components: {
		JoyTypography: {
			defaultProps: {
				level: 'h4',
				gutterBottom: true,
				sx: {
					textAlign: 'center',
					marginTop: 4,
					color: blueGrey[ 900 ]
				}
			}
		}
	}
} )



const dynamicCardLayout = {
	defaultProps: {
		orientation: 'horizontal',
		size: 'lg',
	},
	sx: {
		boxShadow: 'lg',
		width: '80%',
		maxHeight: 'max-content',
		height: 'auto',
	}
}


export {
	cardImageRatio, dynamicCardTypography,
	dynamicCardLayout
}