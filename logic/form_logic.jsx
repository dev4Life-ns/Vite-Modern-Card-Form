// noinspection JSValidateTypes


import { Alert, Button, FormLabel, Typography } from '@mui/joy'
import { guestDetailsProps } from '../data/guest_data_props'
import { reservationDataFields } from '../data/reservation_data_props'


export const locateProperty = ( tempData, propertyName ) => {
	return tempData.find ( item => item.id === propertyName )
}
export const addSubmitButtonText = 'Submit Form'

//guest form logic
export const cityField = locateProperty ( guestDetailsProps, 'city' )
export const stateField = locateProperty ( guestDetailsProps, 'state' )
export const zipCode = locateProperty ( guestDetailsProps, 'zipCode' )
export const mapOptions = stateField && stateField.options

//reservation form logic
export const roomDetails = locateProperty ( reservationDataFields, 'roomType' )
export const roomSelector = roomDetails && roomDetails.options
locateProperty ( reservationDataFields, 'arrivalDate' )
locateProperty ( reservationDataFields, 'departureDate' )
export const onInputChange = ( e, setSpecialRequestText ) => {
	setSpecialRequestText ( e.target.value )
}


export const countTextInput = ( specialRequestText ) => {
	return specialRequestText.length
}

export const onSubmit = ( data ) => {
	return (
		<Alert>
			{ Object.entries ( data ).map ( ( [ key, value ] ) => (
					<FormLabel key={ key }>
						{ key }:
						<Typography key={ key }>
							{ value }
						</Typography>
					</FormLabel>
				)
			) }
			<Button size="sm" variant="solid">
				Looks Good!
			</Button>
		</Alert>
	)
}

export const onSubmit2 = (data) => {
  // Convert data to JSON format
  const jsonData = JSON.stringify(data, null, 2);

  return (
    <Alert>
      <pre>{jsonData}</pre>
      <Button size="sm" variant="solid">
        Looks Good!
      </Button>
    </Alert>
  );
};

