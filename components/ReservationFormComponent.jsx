/* eslint-disable no-mixed-spaces-and-tabs,react/jsx-key,no-unused-vars */
// noinspection JSValidateTypes

import { ErrorMessage } from '@hookform/error-message'
import {
	Button,
	CardContent,
	Checkbox,
	Option,
	CssVarsProvider,
	FormControl,
	Link, Select, Textarea,
	Typography, Input
} from '@mui/joy'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	qrCheckBox,
	reservationDataFields,
	specialRequest
} from '../data/reservation_data_props'
import {
	addSubmitButtonText, countTextInput,
	onInputChange, roomDetails,
	roomSelector, onSubmit
} from '../logic/form_logic'
import { characterCounterTypography, checkboxTerms, fullFormLayout } from '../theme_props/form_theme'

/**
 * `ReservationDateFields` is a functional component that returns a JSX element.
 * This component renders date input fields for a reservation form.
 *
 * @component
 * @param {Object} props - The properties that define the component's behavior and display.
 * @param {Function} props.register - A function from `react-hook-form` for registering input fields.
 * @param {Object} props.errors - An object containing error messages for each field, provided by `react-hook-form`.
 * @returns {React.Element} Returns a JSX element containing date input fields for a reservation form.
 */

const ReservationDateFields = ( {  register, errors } ) => {
	return (
		<>
			{ reservationDataFields.slice ( 0, 2 ).map ( dateFields =>
				<FormControl
					key={ dateFields.id }
					sx={ { gridColumn: dateFields.gridColumn } }
				>
					<Input
						type={ dateFields.type }
						{ ...register ( dateFields.name, {
							required: dateFields.requiredMessage,
							pattern: {
								value: dateFields.pattern,
								message: dateFields.patternErrorMessage
							}
						} ) }
						placeholder={ dateFields.placeholder }
						error={ errors[ dateFields.name ] }
						slotsProps={{ input: dateFields.label} }
					/>
					<ErrorMessage
						errors={ errors }
						name={ dateFields.name }
						render={ ( { message } ) =>
							<Typography>{ message }</Typography> }
					/>
				</FormControl>
			) }
		</>
	)
}

ReservationDateFields.propTypes = {
	register: PropTypes.func,
	errors: PropTypes.object,
}

 const ReservationNumericalFields = ( { register, errors } ) => {
	return (
		<>
			{ reservationDataFields.slice ( 2, 6 ).map ( numericFields =>
				<FormControl
					key={ numericFields.name }
					sx={ { gridColumn: numericFields.gridColumn } }
				>
					<Input
						type={ numericFields.type }
						{ ...register ( numericFields.name, {
							required:{
								value: numericFields.required,
								message: numericFields.requiredMessage
							}
						} ) }
						placeholder={ numericFields.name}
						error={ errors[numericFields.name] }
						slotProps={ {
							input: {
								min: numericFields.min,
								max: numericFields.max
							}
						} }
					/>
					<ErrorMessage
						errors={ errors }
						name={ numericFields.name }
						render={ ( { message } ) =>
			    	<Typography>{ message }</Typography> }
					/>
				</FormControl>
			) }
		</>
	)
}

ReservationNumericalFields.propTypes = {
	register: PropTypes.func,
	errors: PropTypes.object,
}


 const RoomTypeDropdown = ( {register,errors  } ) => {
 return (
  <>
	  <FormControl
		  sx={ { gridColumn: roomDetails.gridColumn } }
	  >
		  <Select
			  { ...register ( roomDetails.name, {
				  required:{
					  value: roomDetails.required,
					  message: roomDetails.requiredMessage
				  }
			  } ) }
			  error={ errors[ roomDetails.name ] }
			  placeholder={ roomDetails.placeholder }
			  color={ errors[ roomDetails.name] ? 'danger' : 'neutral'}
		  >
			  { roomSelector.map ( roomOptions =>
				  <Option
					  value={ roomOptions }>
					  { roomOptions }
				  </Option>
			  ) }
		  </Select>
		  <ErrorMessage
			  errors={ errors }
			  name={ roomDetails.name }
			  render={ ( { message } ) =>
				  <Typography>
					  { message }
				  </Typography> }
		  />
	  </FormControl>

  </>
  )
}

RoomTypeDropdown.propTypes = {
	register: PropTypes.func,
	errors: PropTypes.object
}



 const QRCheckBox = ( { register } ) => {
	return (
		<>
			<FormControl sx={ { gridColumn: qrCheckBox.defaultProps.gridColumn } }>
				<Checkbox 
				          label={
					          qrCheckBox.infoText.descriptionLabel
				          }
				          { ...register ( qrCheckBox.defaultProps.name, {
					          required: qrCheckBox.defaultProps.required
				          } ) }
				/>
				<CssVarsProvider theme={checkboxTerms}>
				<Typography>
						{ qrCheckBox.qrTerms.termsLabel }{ ' ' }
						<Link
							href="#">
							{ qrCheckBox.qrTerms.termsEmphasized }.
						</Link>
				</Typography>
				</CssVarsProvider>
			</FormControl>
		</>
	)
}

QRCheckBox.propTypes = {
	register: PropTypes.func.isRequired
}


/**
 * `SpecialRequestTextArea` is a functional component that renders a textarea for special requests in a reservation form.
 *
 * @component
 * @param {Object} props - The properties that define the component's behavior and display.
 * @param {Function} props.register - A function from `react-hook-form` for registering input fields.
 * @param {String} props.specialRequestText - The text entered by the user in the special request textarea.
 * *
 * @example
 * <SpecialRequestTextArea register={register} specialRequestText={specialRequestText} setSpecialRequestText={setSpecialRequestText} />
 *
 * @returns {React.Element} Returns a JSX element containing a textarea for special requests in a reservation form.
 */

 const SpecialRequestTextArea = ( { specialRequestText, setSpecialRequestText, register } ) => {
	return (
		<>
			<FormControl
				sx={ { gridColumn: specialRequest.specialTextAreaProps.gridColumn} }>
				<Textarea
					{ ...register ( specialRequest.specialTextAreaProps.name,{
						required: specialRequest.specialTextAreaProps.required
					} ) }
					placeholder={ specialRequest.specialTextAreaProps.placeholder }
					value={ specialRequestText }
					onChange={ ( e ) => onInputChange ( e, setSpecialRequestText )}
					minRows={specialRequest.specialTextAreaProps.minRows}
					maxRows={ specialRequest.specialTextAreaProps.maxRows }
					startDecorator={ specialRequest.specialTextAreaProps.icon }
					endDecorator={
				   <CssVarsProvider theme={characterCounterTypography}>
						<Typography>
							{countTextInput(specialRequestText)} {specialRequest.specialTextAreaProps.chars }
						</Typography>
				   </CssVarsProvider>
					}>
				</Textarea>
			</FormControl>
		</>
	)
}

SpecialRequestTextArea.propTypes = {
	register: PropTypes.func.isRequired,
	specialRequestText: PropTypes.string,
	setSpecialRequestText: PropTypes.func
}


/*
*  ReservationFormComponent is functional component in React that
*  renders a reservation form. This form includes date input fields,
* numerical input fields, a dropdown menu for selecting room type,
* a checkbox for QR code agreement, and a textarea for special requests.
*
*/

const ReservationFormComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm ()
	
	const [ specialRequestText, setSpecialRequestText ] = useState ( '' )
	
	return (
		
		<CssVarsProvider theme={ fullFormLayout }>
			<CardContent>
				<ReservationDateFields
					errors={ errors }
					register={ register }
				/>
				<ReservationNumericalFields
					errors={ errors }
					register={ register }
				/>
				<RoomTypeDropdown
					errors={errors}
					register={register}
				/>
				<QRCheckBox
					register={ register }
				/>
				<SpecialRequestTextArea
					register={ register }
					specialRequestText={ specialRequestText }
					setSpecialRequestText={ setSpecialRequestText }
				/>
			 <Button type="submit"
			  onClick={handleSubmit(onSubmit)}>
             { addSubmitButtonText }
            </Button>
			</CardContent>
		</CssVarsProvider>
	)
}

export default ReservationFormComponent

