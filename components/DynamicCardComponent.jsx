/* eslint-disable */
// noinspection JSValidateTypes

import {
	Card,
	CardContent,
	CardOverflow,
	CssVarsProvider,
	Divider, Stack,
	Typography
} from '@mui/joy'
import { Button } from '@mui/joy'
import { useState } from 'react'
import { displayCurrentPageImage, displayCurrentPageTitle, handlePageNavigation } from '../logic/dynamic_logic'
import {
	currentStep,
	disableBackButton,
	handleBackButton,
	handleNextButton, handleNextButtonText,
	handleResetButton
} from '../logic/stepper_logic'
import { joyCustomColors } from '../theme_props/color_palette'
import {
	cardImageRatio,
	dynamicCardLayout,
	dynamicCardTypography
} from '../theme_props/dynamic_card_theme'
import { dualButtonStackTheme, resetButtonStackTheme, stepperButtonProps } from '../theme_props/stepper_theme_props'
import StepNavBar from './StepNavBar'


const DynamicCardComponent = () => {
	const [ activeStep, setActiveStep ] = useState ( 0 )
//	const pathname = window.location.pathname
	return (
			<Card
				{...dynamicCardLayout.defaultProps}
			sx=	{dynamicCardLayout.sx}>
				{/*	card image section */ }
			<CardOverflow
         sx={{
             backgroundImage:`url(${displayCurrentPageImage(activeStep)})`,
             backgroundSize: cardImageRatio.backgroundSize,
	         backgroundPosition: cardImageRatio.backgroundPosition,
	         display: cardImageRatio.display,
	         flex: cardImageRatio.flex }}
           />
				<CardContent>
	                  <StepNavBar activeStep={activeStep}/>
					<CssVarsProvider theme={ dynamicCardTypography }>
					<Typography>
						{ displayCurrentPageTitle ( activeStep ) }
					</Typography>
		     	</CssVarsProvider>
					<Divider/>
					   <CardContent>
						   {handlePageNavigation(activeStep)}
						{/*stepper buttons*/}
							{activeStep === currentStep.length  ? (
								<Stack  {...resetButtonStackTheme.defaultProps}>
					        	<CssVarsProvider theme={joyCustomColors}>
									<Button
										{...stepperButtonProps.resetButtonProps}
										onClick={ handleResetButton( setActiveStep ) }>
										{ stepperButtonProps.stepperButtonText.resetText}
									</Button>
					        </CssVarsProvider>
								</Stack>
							):(
								<Stack {...dualButtonStackTheme.defaultProps}>
						        <CssVarsProvider theme={joyCustomColors}>
									<Button
										{...stepperButtonProps.backButtonProps}
										disabled={disableBackButton( activeStep )}
										onClick={() => handleBackButton(setActiveStep)}
									>
										{ stepperButtonProps.stepperButtonText.backText}
									</Button>
									<Button
										{...stepperButtonProps.nextButtonProps}
										onClick={() => handleNextButton(setActiveStep)}>
										{ handleNextButtonText( activeStep + 1 )}
									</Button>
					    	</CssVarsProvider>
								</Stack>
							)  }
				</CardContent>
				</CardContent>
			</Card>
	)
}
export default DynamicCardComponent