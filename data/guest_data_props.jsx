import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'


export const guestDetailsProps = [
	{
		id: 'fullName',
		name: 'Full Name',
		type: 'text',
		placeholder: 'Full Name',
		pattern: /^[a-zA-Z\s]{2,40}/,
		requiredMessage: 'Please enter your full name',
		patternErrorMessage: 'Only letters and white space allowed',
		gridColumn: '1/-1',
		endDecoration: null,
		
	},
	{
		id: 'idNumber',
		name: 'ID Number',
		type: 'text',
		placeholder: 'ID Number',
		requiredMessage: 'Enter a valid ID Number',
		pattern: /^[a-zA-Z]{2}\d{10}/,
		patternErrorMessage: 'Enter your 2 letter state abbreviation and' +
			' 10 digit ID number',
		gridColumn: ' 1/5',
		endDecoration: null,
		
	},
	{
		id: 'idExpiration',
		name: 'ID Expiration',
		type: 'month',
		placeholder: 'ID Expiration',
		requiredMessage: 'Id expiration required',
		pattern: /^(0[1-9]|1[0-2])\/\d{2}$/,
		patternErrorMessage: 'Please enter a valid expiration date in the format MM/YY',
		gridColumn: '5/-1',
		endDecoration: 'exp.',
		
	},
	{
		name: 'Address',
		type: 'text',
		placeholder: 'Address',
		requiredMessage: 'Address required',
		pattern: /^\d+\s[a-zA-Z\s]{5,50}$/,
		patternErrorMessage: 'Enter your address number followed by your street address' +
			'no special characters allowed except for periods and letters',
		gridColumn: '1/-1',
		endDecoration: null,
		
	},
	{
		id: 'city',
		name: 'City',
		type: 'text',
		placeholder: 'City',
		requiredMessage: 'You forgot to enter your city',
		pattern: /^[a-zA-Z]{4,30}/,
		patternErrorMessage: 'City name must be between 4 and 30 characters long',
		gridColumn: '1/3 ',
		endDecoration: null,
		
	},
	{
		id: 'state',
		name: 'State',
		placeholder: 'State',
		options: [
			'Alabama', 'Alaska', 'Arizona', 'Arkansas',
			'California', 'Colorado', 'Connecticut',
			'Delaware', 'Florida', 'Georgia', 'Hawaii',
			'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
			'Kentucky', 'Louisiana', 'Maine', 'Maryland',
			'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
			'Missouri', ' Montana', 'Nebraska', 'Nevada',
			'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
			'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
			' Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
			'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia',
			'Washington', 'West Virginia'
		],
		requiredMessage: 'State required',
		gridColumn: ' 3/5',
		endDecoration: null,
		defaultValue: 'Choose a state',
		
	},
	{
		id: 'zipCode',
		name: 'Zip Code',
		type: 'text',
		placeholder: 'Zip Code',
		requiredMessage: 'Please enter a valid zip code',
		pattern: /^\d{5}/,
		patternErrorMessage: 'Please enter a valid 5 digit zip code',
		gridColumn: '5/ -1',
		endDecoration: null,
		
	},
	{
		id: 'phoneNumber',
		name: 'Phone Number',
		type: 'tel',
		placeholder: 'Phone Number',
		requiredMessage: 'Phone number required',
		pattern: /^\d{3}-\d{3}-\d{4}$/,
		patternErrorMessage: 'Please enter your phone number in the format 000-000-0000',
		gridColumn: '1/-1',
		endDecoration: <PhoneIphoneOutlinedIcon/>,
		
	},
	{
		id: 'email',
		name: 'Email',
		type: 'email',
		placeholder: 'Email',
		requiredMessage: ' Email address required',
		pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
		patternErrorMessage: 'Please enter a valid email address',
		gridColumn: '1/-1',
		endDecoration: <EmailOutlinedIcon/>,
		
	},
	{
		id: 'loyaltyNumber',
		name: 'Loyalty Number',
		type: 'text',
		placeholder: 'Loyalty Number',
		requiredMessage: false,
		pattern: /^\d{6,8}$/,
		patternErrorMessage: 'Please enter a valid 6 to 8 digit loyalty number',
		gridColumn: '1/-1',
		endDecoration: <CardMembershipOutlinedIcon/>,
		
	}
]


