import { AspectRatio, CssVarsProvider, Typography } from '@mui/joy'
import { errorImageProps, errorPageText } from '../data/error_data_props'
import { errorTheme } from '../theme_props/error_theme'


const Error404Component = () => {
	return (
		<>
			<CssVarsProvider theme={errorTheme}>
				<Typography
					level={errorPageText.errorProps.level}>
					{errorPageText.errorTitle.title}
				</Typography>
				<Typography
					level={errorPageText.errorSubTextProps.level}
					sx={errorPageText.errorSubTextProps.mb}>
					{errorPageText.errorSubText.subText}
				</Typography>
						<AspectRatio>
							<img
								src={errorImageProps.src}
								alt={errorImageProps.alt}
							/>
						</AspectRatio>
			</CssVarsProvider>
		</>
	)
}
export default Error404Component