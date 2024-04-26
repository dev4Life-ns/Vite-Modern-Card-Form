import { stepperButtonProps } from '../theme_props/stepper_theme_props'

/**
 * Array of steps for the stepper component.
 * @type {string[]}
 */
export const currentStep = [ 'Welcome To CayModern Reservations', 'Guest Details',
	'Reservation Details', 'Stay Details' ]

/**
 * Function to handle the next button click event.
 * It increments the active step by 1.
 * @param {Function} setActiveStep - The function to set the active step.
 */
export const handleNextButton = ( setActiveStep ) => {
	return setActiveStep ( ( prevActiveStep ) => prevActiveStep + 1 )
}

/**
 * Function to handle the back button click event.
 * It decrements the active step by 1.
 * @param {Function} setActiveStep - The function to set the active step.
 */
export const handleBackButton = ( setActiveStep ) => {
	return setActiveStep ( ( prevActiveStep ) => prevActiveStep - 1 )
}

/**
 * Function to handle the reset button click event.
 * It sets the active step to 0.
 * @param {Function} setActiveStep - The function to set the active step.
 */
export const handleResetButton = ( setActiveStep ) => {
	return setActiveStep ( 0 )
}

/**
 * Function to determine if the back button should be disabled.
 * It checks if the active step is 0 or the pathname is '*'.
 * @param {number} activeStep - The current active step.

 * @return {boolean} - Returns true if the back button should be disabled, false otherwise.
 */
export const disableBackButton = ( activeStep ) => {
	return activeStep === 0 || activeStep === 3
}

/**
 * Function to determine if the step error indicator should be shown.
 * It checks if the active step and index are both 3.
 * @param {number} activeStep - The current active step.
 * @param {number} index - The current index.
 * @return {boolean} - Returns true if the step error indicator should be shown, false otherwise.
 */
export const showStepErrorIndicator = ( activeStep , index ) => {
	return activeStep === 3 && index === 3 
}

/**
 * Function to determine the step label.
 * It checks if the active step and index are both 3, if so it returns an error message.
 * Otherwise, it returns the step label.
 * @param {number} activeStep - The current active step.
 * @param {number} index - The current index.
 * @param {string} stepLabel - The current step label.
 * @return {string} - Returns the step label or an error message.
 */
export const stepErrorLabel = (  activeStep , index, stepLabel ) => {
	return activeStep === 3  && index === 3
		? 'Oops! Error Occurred'
		: stepLabel
}

/**
 * Function to determine the text to be displayed on the 'Next' button.
 * It checks if the active step is the last step, if so it returns 'Finish'.
 * Otherwise, it returns the label of the current step.
 * @param {number} activeStep - The current active step.
 * @return {string} - Returns the text to be displayed on the 'Next' button.
 */
export const handleNextButtonText = ( activeStep ) => {
	return activeStep === currentStep.length
		? stepperButtonProps.stepperButtonText.errorText
		: `To ${currentStep[ activeStep ]}`
}
