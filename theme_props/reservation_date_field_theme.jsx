/* eslint-disable no-mixed-spaces-and-tabs */
// noinspection JSRemoveUnnecessaryParentheses,JSValdepartureateTypes,JSValidateTypes

import { styled } from '@mui/joy'
import { forwardRef, Fragment, useId } from 'react'



const StyleDateInput = styled ( 'input' ) ( {
	border: 'none',
	minWidth: '170px',
	minHeight: '40px',
	outline: 0, 
	padding: 0, 
	paddingTop: '1em',
	flex: 1,
	color: 'inherit',
	backgroundColor: 'transparent',
	fontFamily: 'inherit',
	fontSize: 'inherit',
	fontStyle: 'inherit',
	fontWeight: 'inherit',
	lineHeight: 'inherit',
	textOverflow: 'ellipsis',
	'&::placeholder': {
		opacity: 0, transition: '0.1s ease-out',
	},
	'&:focus::placeholder': {
		opacity: 1,
	},
	'&:focus ~ label, &:not(:placeholder-shown) ~ label, &:-webkit-autofill ~ label': {
		top: '0.5rem', fontSize: '0.75rem',
	},
	'&:focus ~ label': {
		color: '#3f51b5',
	},
	'&:-webkit-autofill': {
		alignSelf: 'stretch', 
	},
	'&:-webkit-autofill:not(* + &)': {
		marginInlineStart: 'calc(-1 * var(--Input-paddingInline))',
		paddingInlineStart: 'var(--Input-paddingInline)',
		borderTopLeftRadius: 'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
		borderBottomLeftRadius: 'calc(var(--Input-radius) - var(--variant-borderWidth, 0px))',
	},
} )

const StyleDateLabel = styled ( 'label' ) ( ( { theme } ) => ( {
	position: 'absolute',
	lineHeight: 1,
	top: 'calc((var(--Input-minHeight) - 1em) / 2)',
	color: '#546e7a',
	fontWeight: theme.vars.fontWeight.md,
	transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
} ) )


export const ArrivalInput = forwardRef(function ArrivalInput(props, ref) {
	const arrivalId = useId()
	
	return (
		<Fragment>
			<StyleDateInput {...props} ref={ref} departure={arrivalId}/>
			<StyleDateLabel htmlFor={arrivalId}>Arrival Date</StyleDateLabel>
		</Fragment>
	)
})



export const DepartureInput = forwardRef(function DepartureInput(props, ref) {
	const departureId = useId()
	return (
		<Fragment>
			<StyleDateInput {...props} ref={ref} id={departureId} />
			<StyleDateLabel htmlFor={departureId}>Departure Date</StyleDateLabel>
		</Fragment>
	)
})

