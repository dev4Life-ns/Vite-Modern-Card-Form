// noinspection JSValidateTypes

import { Box,  Step, StepLabel, Stepper, ThemeProvider } from '@mui/material'
import PropTypes from 'prop-types'
import {
	currentStep,
	showStepErrorIndicator, stepErrorLabel
} from '../logic/stepper_logic'
import { materialCustomColors } from '../theme_props/color_palette'
import {
	stepperBoxLayout
} from '../theme_props/stepper_theme_props'


const StepNavBar = ( { activeStep }  ) => {
	return (
		<ThemeProvider theme={ materialCustomColors }>
			<Box
				sx={ { width: stepperBoxLayout.width } }
			>
				<Stepper activeStep={ activeStep }>
					{ currentStep.map ( ( stepLabel, index ) => (
						<Step key={ stepLabel }>
							<StepLabel
								error={ showStepErrorIndicator ( activeStep, index ) }>
								{stepErrorLabel ( activeStep, index, stepLabel ) }
							</StepLabel>
						</Step>
					) ) }
				</Stepper>
			</Box>
		</ThemeProvider>
	)
}

StepNavBar.propTypes = {
	activeStep: PropTypes.number,
}

export default StepNavBar