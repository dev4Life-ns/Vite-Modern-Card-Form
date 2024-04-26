// noinspection SpellCheckingInspection

import  Error404  from '../pages/Error404'
import  GuestForm  from '../pages/GuestForm'
import  ReservationForm  from '../pages/ReservationForm'
import  WelcomeScreen  from '../pages/WelcomeScreen'
import { currentStep } from './stepper_logic'
import oceanroom from '../assets/oceanroom.png'
import guestImage from '../assets/guestImage.png'
import reservationDesk from '../assets/reservationDesk.png'
import errorGradient from '../assets/errorGradient.png'



 /*
 displayCurrentPageTitle is a helper function used to dynamically display the title
  of the current page in a stepper navigation based on the active step. The active
  step is passed as an argument to the function, which then uses this value to index
  into the currentStep array and return the corresponding page title.
  */

export const displayCurrentPageTitle = (activeStep) => {
	return currentStep[activeStep]
}


/**
 * Determines the image to be displayed based on the current active step.
 * @param {number} activeStep - The current active step in the stepper navigation.
 * @return {{}} The path to the image to be displayed. If the active step is 0,
 * it returns the path to the guest image.
 * f the active step is 1, it returns the path to the reservation image.
 * Otherwise, it returns the path to the 404 image
 */
export const displayCurrentPageImage= ( activeStep ) => {
	switch (activeStep) {
		case 0:
			return oceanroom
		case 1:
			return guestImage
		case 2:
			return reservationDesk
		default:
			return errorGradient
	}
}

/**
 * Navigate to the appropriate page based on the active step.
 *
 * @return {JSX.Element} The component for the corresponding page.
 */
export const handlePageNavigation = (  activeStep  ) => {
	switch (activeStep) {
		case 0:
			return <WelcomeScreen />
		case 1:
			return <GuestForm />
		case 2:
			return <ReservationForm />
		default:
			return <Error404 />
	}
}

