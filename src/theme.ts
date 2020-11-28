// @ts-nocheck

import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const MAIN_COLOR = 'rgb(29, 161, 242)';
const DARK_COLOR = 'rgb(26, 145, 218)';

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'system-ui',
			'-apple-system',
			'BlinkMacSystemFont',
			'Segoe UI',
			'Roboto',
			'Ubuntu',
			'Helvetica Neue',
			'sans-serif',
		],
	},
	palette: {
		primary: {
			main: MAIN_COLOR,
			dark: DARK_COLOR,
			contrastText: '#fff',
		},
		secondary: {
			main: DARK_COLOR,
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
		text: {
			primary: 'rgb(15, 20, 25)',
			secondary: 'rgb(91, 112, 131)',
		},
	},
	shadows: [],
	overrides: {
		MuiButton: {
			root: {
				borderRadius: 100,
				textTransform: 'none',
				fontSize: 15,
				fontWeight: 'bold',
				minHeight: 39,
			},
			textPrimary: {
				paddingLeft: 20,
				paddingRight: 20,
			},
			outlinedPrimary: {
				borderColor: 'rgb(29, 161, 243)',
			},
			contained: {
				'&:disabled': {
					backgroundColor: MAIN_COLOR,
					color: '#fff',
					opacity: 0.5,
				},
			},
		},
		MuiIconButton: {
			colorPrimary: {
				'&:hover': {
					backgroundColor: 'rgba(29, 161, 242, 0.1)',

					'& svg': {
						color: MAIN_COLOR,
					},
				},
			},
		},
		MuiFilledInput: {
			underline: {
				'&:after': {
					borderBottomWidth: '2px',
				},
				'&:before': {
					borderColor: '#000',
					borderBottomWidth: '2px',
				},
			},
			input: {
				backgroundColor: 'rgb(245, 248, 250)',
			},
		},
		MuiDialog: {
			paper: {
				borderRadius: 15,
			},
		},
		MuiDialogActions: {
			root: {
				marginBottom: 8,
			},
		},
		MuiDialogTitle: {
			root: {
				borderBottom: '1px solid rgb(204, 214, 221)',
				marginBottom: 10,
				padding: '10px 15px',
				'& h2': {
					display: 'flex',
					alignItems: 'center',
					fontWeight: 800,
				},
				'& button': {
					padding: 8,
					marginRight: 20,
				},
			},
		},
		MuiTextField: {
			root: {
				padding: '10px 0px',

				'& .MuiTextField-root': {
					padding: '10px 0px',
				},
				'& .MuiFilledInput-underline:hover:before': {
					borderBottomColor: 'rgba(0, 0, 0, 0.42)',
				},
				'& .MuiFilledInput-underline:before': {
					transition: 'none',
					borderBottomWidth: '1.5px',
				},
				'& .MuiFilledInput-underline:after': {
					transition: 'none',
					borderBottomWidth: '1.5px',
				},
				'& .MuiFormHelperText-root': {
					margin: '0',
				},

				'& label': {
					fontSize: 15,
					fontWeight: '400',
					padding: '5px 10px 0px 10px',
					margin: '0',
					position: 'absolute',
				},
				'& label.MuiInputLabel-filled': {
					top: '-8px',
					left: '-12px',
				},
				'& input': {
					fontSize: 19,
					padding: '28px 10px 9px',
				},
			},
		},
		MuiFormControl: {
			root: {
				'& .MuiFormControl-root': {
					padding: '10px 0px',
				},
				'& .MuiInput-formControl': {
					margin: '0',
				},
				'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
					borderBottomColor: 'rgba(0, 0, 0, 0.42)',
					borderBottomWidth: '1.5px',
				},
				'& .MuiInput-underline:before': {
					transition: 'none',
					borderBottomWidth: '1.5px',
				},
				'& .MuiInput-underline:after': {
					transition: 'none',
					borderBottomWidth: '1.5px',
				},
				'& .MuiFormHelperText-root': {
					margin: '0',
				},

				'& label.MuiInputLabel-shrink': {
					fontSize: 15,
					fontWeight: '400',
					padding: '5px 10px 0px 10px',
					margin: '0',
					position: 'absolute',
					transform: 'none',
					zIndex: '1',
				},
				'& select': {
					backgroundColor: 'rgb(245, 248, 250)',
					fontSize: 19,
					lineHeight: '1',
					padding: '24px 10px 8px',
				},
			},
		},
	},
});

export default theme;
