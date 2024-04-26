/* eslint-disable react/jsx-key,react/jsx-no-undef,no-unused-vars */
// noinspection JSValidateType
// noinspection JSValidateTypes

import { ErrorMessage } from '@hookform/error-message'
import {
	Button, CardContent, CssVarsProvider, Option, FormControl,
	Input, Select, Typography
} from '@mui/joy'
import { useForm } from 'react-hook-form'
import { guestDetailsProps } from '../data/guest_data_props'
import {
	addSubmitButtonText,
	cityField,
	mapOptions, onSubmit,
	stateField,
	zipCode
} from '../logic/form_logic'
import { fullFormLayout } from '../theme_props/form_theme'


const GuestFormComponent = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm ()
	

	return (
		<>
			<CssVarsProvider theme={ fullFormLayout }>
				<CardContent>
					{ guestDetailsProps.slice ( 0, 4 ).map ( dataFields =>
						<FormControl
							key={ dataFields.id }
							sx={ { gridColumn: dataFields.gridColumn } }
						>
							<Input
								type={ dataFields.type }
								{ ...register ( dataFields.name, {
									required: dataFields.requiredMessage,
									pattern: {
										value: dataFields.pattern,
										message: dataFields.patternErrorMessage
									}
								} ) }
								placeholder={ dataFields.placeholder }
								error={ errors[ dataFields.name ] }
								endDecorator={ dataFields.endDecoration }
							/>
							<ErrorMessage
								errors={ errors }
								name={ dataFields.name }
								render={ ( { message } ) =>
								<Typography>{ message }</Typography> }
							/>
						</FormControl>
					) }
					{/*city,state,zipcode fields*/ }
					<FormControl
						key={ cityField.id }
						sx={ { gridColumn: cityField.gridColumn } }
					>
						<Input
							type={ cityField.type }
							{ ...register ( cityField.name, {
								required: cityField.requiredMessage,
								pattern: {
									value: cityField.pattern,
									message: cityField.patternErrorMessage
								}
							} ) }
							placeholder={ cityField.placeholder }
							name={ cityField.name }
							error={ errors[ cityField.name ] }
							endDecorator={ cityField.endDecoration }
						/>
						<ErrorMessage
							errors={ errors }
							name={ cityField.name }
							render={ ( { message } ) =>
								<Typography>{ message }</Typography> }
						/>
					</FormControl>

					<FormControl
						sx={ { gridColumn: stateField.gridColumn } }
					>
						<Select
							{ ...register ( stateField.name, {
								required: stateField.requiredMessage,
								pattern: {
									value: stateField.pattern,
									message: stateField.patternErrorMessage
								}
							} ) }
							color={ errors[ stateField.name] ? 'danger' : 'neutral'}
							error={ errors[ stateField.name ] }
							placeholder={ stateField.placeholder }
						
						>
							{ mapOptions.map ( stateOptions =>
								<Option
									value={ stateOptions }>
									{ stateOptions }
								</Option>
							) }
						</Select>
						<ErrorMessage
							errors={ errors }
							name={ stateField.name }
							render={ ( { message } ) =>
								<Typography>
									{ message }
								</Typography> }
						/>
					</FormControl>

					<FormControl
						key={ zipCode.id }
						sx={ { gridColumn: zipCode.gridColumn } }
					>
						<Input
							type={ zipCode.type }
							{ ...register ( zipCode.name, {
								required: zipCode.requiredMessage,
								pattern: {
									value: zipCode.pattern,
									message: zipCode.patternErrorMessage
								}
							} ) }
							placeholder={ zipCode.placeholder }
							name={ zipCode.name }
							error={ errors[ zipCode.name ] }
						/>
						<ErrorMessage
							errors={ errors }
							name={ zipCode.name }
							render={ ( { message } ) =>
							<Typography>{ message }</Typography> }
						/>
					</FormControl>

					{ guestDetailsProps.slice ( 7 ).map ( guestRemainFields =>
						<FormControl
							key={ guestRemainFields.id }
							sx={ { gridColumn: guestRemainFields.gridColumn } }
						>
							<Input
								type={ guestRemainFields.type }
								{ ...register ( guestRemainFields.name, {
									required: guestRemainFields.requiredMessage,
									pattern: {
										value: guestRemainFields.pattern,
										message: guestRemainFields.patternErrorMessage
									}
								} ) }
								name={ guestRemainFields.name }
								placeholder={ guestRemainFields.placeholder }
								error={ errors[ guestRemainFields.name ] }
								endDecoration={ guestRemainFields.endDecoration }
							/>
							<ErrorMessage
								errors={ errors }
								name={ guestRemainFields.name }
								render={ ( { message } ) =>
									<Typography>
										{ message }
									</Typography> }
							/>
						</FormControl>
					) }
					<Button
						type="submit"
						onClick={ handleSubmit ( onSubmit) }>
						{ addSubmitButtonText }
					</Button>
				</CardContent>
			</CssVarsProvider>
		</>

	)
}
export default GuestFormComponent