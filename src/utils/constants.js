const PROVINCE_LEVEL_FILLS = [
	'white',
	'#3598db',
	'#30cc70',
	'#f3c218',
	'#d58337',
	'#e84c3d',
];

const MENU_OPTIONS = [
	{ label: 'Lived there', level: 5, fill: '#e84c3d' },
	{ label: 'Stayed there', level: 4, fill: '#d58337' },
	{ label: 'Visited there', level: 3, fill: '#f3c218' },
	{ label: 'Alighted there', level: 2, fill: '#30cc70' },
	{ label: 'Passed there', level: 1, fill: '#3598db' },
	{ label: 'Never been there', level: 0, fill: 'white' },
];

// The order of this array is strictly important as it's used in encoding/decoding URL
const PROVINCES = [
	{
		id: 'Davao Oriental',
		transform: 'translate(757.5 1020)',
		drawPath: 'M-7.5-60l15 60-30 15 15 45 30-45v-45l-15-30z',
	},

	{
		id: 'Tawi-Tawi',
		transform: 'translate(292.5 1170)',
		drawPath: 'M22.5-15l-45 30h45z',
	},

	{
		id: 'Palawan',
		transform: 'translate(195 795)',
		drawPath:
      'M-120 150l15-30L30-15l15-75 30 75L0 30v15l-75 75zM75-150h15l30 15-30 30z',
	},

	{
		id: 'Cagayan',
		transform: 'translate(420 187.5)',
		drawPath:
      'M0-67.5v15h-15v-15zm30 30l-15 15v-15zm-75 30h15l45 30 15-15v-15l15 15v15l-15 15v30H0l-15-15v-30z',
	},
];

const PROVINCES_LENGTH = PROVINCES.length;

const FB_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php?u=';

export { PROVINCES, PROVINCE_LEVEL_FILLS, PROVINCES_LENGTH, MENU_OPTIONS, FB_SHARE_URL };
