import { IconButton, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';

import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: 10,
		width: '100%',
		textAlign: 'left',

		'& textarea': {
			fontFamily: theme.typography.fontFamily,
			width: '100%',
			fontSize: 19,
			fontWeight: 400,
			minHeight: 24,
			maxHeight: 750,
			border: 'none',
			resize: 'none',

			overflowY: 'auto',
			boxSizing: 'padding-box',
		},
		'& textarea:focus': {
			outline: 'none',
		},
		'& textarea::placeholder': {
			color: 'rgb(101, 119, 134)',
		},
	},
	button: {
		borderRadius: 100,
		maxHeight: 28,
		padding: '10px 5px',
		marginTop: 5,
		marginBottom: 10,
	},
	buttonIcon: {
		fontSize: 20,
	},
	buttonText: {
		fontFamily: theme.typography.fontFamily,
		margin: '0 0 0 7px',
		fontSize: 13,
		fontWeight: 700,
	},
	underInfo: {
		marginBottom: 10,
		borderBottom: '1px solid rgba(128,128,128,0.15)',
	},
}));

const useInput = (initialValue: string, minRows: number, maxRows: number) => {
	const [value, setValue] = useState(initialValue);

	const inputHandler = (event: React.FormEvent<HTMLTextAreaElement>) => {
		const elm = event.target as any;

		let rows: any;

		if (!elm._baseScrollHeight) {
			let savedValue = elm.value;
			elm.value = '';
			elm._baseScrollHeight = elm.scrollHeight;
			elm.value = savedValue;
		}

		elm.rows = minRows;
		rows =
			Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 24.5) +
			minRows;
		elm.rows = rows > minRows + 1 ? rows - 1 : rows;
		elm.rows = elm.rows > maxRows ? maxRows : elm.rows;
	};

	return {
		bind: {
			value,
			onInput: (event: any) => inputHandler(event),
			onChange: (event: any) => setValue((prev) => event.target.value),
		},
		value,
		setValue,
		clear: () => setValue((prev) => ''),
	};
};

interface AutoResizableInputProps {
	maxRows?: number;
	maxSymbols: number;
	minRows?: number;
	onChange: (text: string) => void;
}

const AutoSizeTextArea: React.FC<AutoResizableInputProps> = ({
	minRows = 1,
	maxRows = 15,
	onChange,
}): React.ReactElement => {
	const classes = useStyles();
	const [isUsed, setUsed] = useState(false);
	const input = useInput('', minRows, maxRows);

	return (
		<div className={classes.root}>
			<textarea
				{...input.bind}
				onChange={(event) => {
					input.bind.onChange(event);
					onChange(event.target.value);
				}}
				rows={minRows}
				placeholder={'Что происходит?'}
				onFocusCapture={() => setUsed(true)}
			/>
			{isUsed ? (
				<div className={classes.underInfo}>
					<IconButton color='primary' className={classes.button}>
						<PublicIcon
							color='primary'
							className={classes.buttonIcon}
						></PublicIcon>
						<div className={classes.buttonText}>
							Отвечать могут все пользователи
						</div>
					</IconButton>
				</div>
			) : null}
		</div>
	);
};

export default AutoSizeTextArea;
