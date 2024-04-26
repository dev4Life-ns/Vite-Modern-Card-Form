import { AspectRatio, CssVarsProvider } from '@mui/joy'
import { welcomeScreenProps } from '../data/welcome_sceen_data_props'
import { welcomeScreenTheme } from '../theme_props/welcomeScreenTheme'

const WelcomeScreenComponent = () => {
	return (
		<>
			<CssVarsProvider theme={welcomeScreenTheme}>
				<AspectRatio>
					<video
						autoPlay
						loop>
						<source
							src={welcomeScreenProps.src}
							type={welcomeScreenProps.type}
						/>
					</video>
				</AspectRatio>
			</CssVarsProvider>
		</>
	)
}
export default WelcomeScreenComponent