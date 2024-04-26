
import { ArrivalInput, DepartureInput } from '../theme_props/reservation_date_field_theme'

export const reservationDataFields = [
	{
		id: 'arrivalDate',
		name: 'Arrival Date',
		type: 'date',
		gridColumn: '1 / 4',
		label: ArrivalInput,
		required: true,
		requiredMessage: 'Please select your arrival date',
	},
	{
		id: 'departureDate',
		name: 'Departure Date',
		type: 'date',
		gridColumn: '4 / 7',
		label: DepartureInput,
		required: true,
		requiredMessage: 'Please select your departure date',
	},
	{
		id: 'nights',
		name: 'Nights',
		type: 'number',
		min: 1,
		max: 7,
		gridColumn: '1 / 3',
		required: true,
		requiredMessage: 'Please select number of nights',
	},
	{
		id: 'adults',
		name: 'Adults',
		type: 'number',
		value: ' ',
		min: 1,
		max: 4,
		gridColumn: '3/5 ',
		required: true,
		requiredMessage: 'Please select number of adults',
	},
	{
		id: 'children',
		name: 'Children',
		type: 'number',
		value: ' ',
		min: 0,
		max: 5,
		gridColumn: '  5/-1 ',
		required: true,
		requiredMessage: 'Please select number of children',
	},
	{
		id: 'rooms',
		name: '# of Rooms',
		type: 'number',
		min: 1,
		max: 5,
		gridColumn: ' 1 / 4',
		required: true,
		requiredMessage: 'Please select number of rooms',
	},
	{
		id: 'roomType',
		name: 'Room Type',
		type: 'text',
		gridColumn: '4 / -1',
		options: [
			'Double Deluxe Suite - $2,050.95',
			'Coral Queen Deluxe Suite - $3,000.95',
			'Coral Queen Lux Suite - $3,500.95',
			'Coral King Lux Suite - $4,500.95',
			'Stingray Queen Deluxe Suite - $5,500.95',
			'Stingray Queen Lux Suite - $6,000.95',
			'Stingray King Lux Suite - $7,000.95',
			'Shark Queen Lux Suite - $8,000.95',
			'Shark King Lux Suite - $9,000.95',
			'Shark Pin house Suite - $17,000.95'
		],
		placeholder: 'Choose Room Type...',
		required: true,
		requiredMessage: 'Please select your room type'
	}
]


export const qrCheckBox = {
	defaultProps: {
		id: 'qrCode',
		name: 'QrCode',
		gridColumn: ' 1 / -1',
		left: 0,
		required: false,
	},
	qrInfoTypography: {
		level: 'body-sm',
		color: '#283593',
	},
	infoText: {
		descriptionLabel: 'I would like to active all QR features for my reservation.'
	},
	qrTerms: {
		termsLabel: 'I have read and agree to the',
		termsEmphasized: ' terms and conditions',
	}
}


export const specialRequest = {
	specialTextAreaProps: {
		id: 'specialRequest',
		name: 'Special Request',
		placeholder: 'Enter all special request here...',
		type: 'text',
		gridColumn: '1 / -1',
		width: 1,
		minRows: 4,
		maxRows: 8,
		required: false,
		chars: 'character(s)',
		icon: '🙏'
	},
	specialRequestTypography: {
		level: 'body-sx',
		color: 'neutral.900'
	},
	sxProps: {
		ml: 'auto'
	}
}