/**
 * `stepperBoxLayout` is an object that defines the width of the stepper box layout.
 * It is exported for use in other parts of the application.
 *
 * @typedef {Object} stepperBoxLayout
 * @property {number} width - The width of the stepper box layout.
 */
const stepperBoxLayout = {
 width: 1,
}

/**
 * `resetButtonStackTheme` is an object that defines the default properties of the reset button stack theme.
 * It is exported for use in other parts of the application.
 *
 * @typedef {Object} resetButtonStackTheme
 * @property {Object} defaultProps - Contains the default properties for the reset button stack theme.
 * @property {string} defaultProps.direction - The direction of the reset button stack theme.
 * @property {string} defaultProps.justifyContent - The justification of the content in the reset button stack theme.
 */
const resetButtonStackTheme = {
 defaultProps:{
  direction: 'row',
  justifyContent: 'flex-end',
 }
}

/**
 * `dualButtonStackTheme` is an object that defines the default properties of the dual button stack theme.
 * It is exported for use in other parts of the application.
 *
 * @typedef {Object} dualButtonStackTheme
 * @property {Object} defaultProps - Contains the default properties for the dual button stack theme.
 * @property {string} defaultProps.direction - The direction of the dual button stack theme.
 * @property {string} defaultProps.justifyContent - The justification of the content in the dual button stack theme.
 */
const dualButtonStackTheme ={
 defaultProps: {
  direction: 'row',
  justifyContent:'space-between',
 }
}

/**
 * `stepperButtonProps` is an object that defines the properties of the stepper buttons.
 * It is exported for use in other parts of the application.
 *
 * @typedef {Object} stepperButtonProps
 * @property {Object} resetButtonProps - Contains the properties for the reset button.
 * @property {string} resetButtonProps.variant - The variant of the reset button.
 * @property {string} resetButtonProps.color - The color of the reset button.
 * @property {Object} nextButtonProps - Contains the properties for the next button.
 * @property {string} nextButtonProps.variant - The variant of the next button.
 * @property {string} nextButtonProps.color - The color of the next button.
 * @property {Object} backButtonProps - Contains the properties for the back button.
 * @property {string} backButtonProps.variant - The variant of the back button.
 * @property {string} backButtonProps.color - The color of the back button.
 * @property {Object} stepperButtonText - Contains the text for the stepper buttons.
 * @property {string} stepperButtonText.backText - The text for the back button.
 * @property {string} stepperButtonText.resetText - The text for the reset button.
 * @property {string} stepperButtonText.errorText - The text for the error message.
 */
const stepperButtonProps = {
 resetButtonProps: {
  variant: 'plain',
  color: 'primary',
 },
 nextButtonProps: {
  variant: 'solid',
  color: 'primary',
 },
 backButtonProps: {
  variant: 'outlined',
  color: 'neutral'
 } ,
 stepperButtonText: {
  backText: 'Back',
  resetText: 'Reset',
  errorText: 'Error Occurred',
 }
}

export { stepperBoxLayout,resetButtonStackTheme,
 dualButtonStackTheme, stepperButtonProps }