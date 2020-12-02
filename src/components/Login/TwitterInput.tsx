import React, { useEffect, useState } from 'react';
import { makeStyles, TextField, TextFieldProps } from '@material-ui/core';
import { useDebouncedCallback } from 'use-debounce';

interface TwitterInputProps {
	title: string;
	maxLength?: number;
	validationFunc?: (text: string) => string | undefined;
	selector?: Array<any>;
	fullWidth?: boolean;
	useDebounceDelay?: number;
}

const useInput = (initialValue: string, maxLength?: number) => {
	const [value, setValue] = useState(initialValue);
	const [state, setState] = useState({ isUsed: false, isInit: false });

	useEffect(() => {
		if (!state.isInit) {
			setState({ ...state, isInit: true });
			return;
		}

		if (!state.isUsed) setState({ ...state, isUsed: true });
	}, [state, value]);

	return {
		bind: {
			value,
			onChange: (event: any) =>
				setValue((prev) => {
					if (maxLength && event.target.value.length > maxLength)
						return prev;

					return event.target.value;
				}),
		},
		value,
		setValue,
		isUsed: state.isUsed,
		clear: () => setValue((prev) => ''),
	};
};

const useStyles = makeStyles((theme) => ({
	helperText: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: '5px 10px 0px',
		fontSize: 15,
		lineHeight: '20px',
	},
	statusText: {
		color: 'rgba(0, 0, 0, 0.54)',
	},
}));

const TwitterInput: React.FC<TextFieldProps & TwitterInputProps> = (props) => {
	const classes = useStyles();
	const input = useInput('', props.maxLength);
	const [validationText, setValidationText] = useState<string | undefined>(
		undefined
	);

	const debouncedValidation = useDebouncedCallback(() => {
		if (props.validationFunc) {
			setValidationText((prev) => props.validationFunc!(input.value));
		}
	}, props.useDebounceDelay || 50);

	useEffect(() => {
		debouncedValidation.callback();
	}, [debouncedValidation, input.value]);

	useEffect(() => {
		if (input.isUsed) input.clear();
	}, [input, props.title]);

	const hasError = input.isUsed && validationText !== undefined;

	const helperText = (
		<div className={classes.helperText}>
			<div>{hasError && validationText}</div>
			{props.maxLength && (
				<div className={classes.statusText}>
					{input.value.length}/{props.maxLength}
				</div>
			)}
		</div>
	);

	return (
		<TextField
			autoFocus={props.autoFocus}
			{...input.bind}
			label={props.title}
			helperText={helperText}
			fullWidth={props.fullWidth}
			error={hasError}
			InputLabelProps={{
				shrink: false,
				disableAnimation: true,
			}}
			variant='filled'
		></TextField>
	);
};

export default TwitterInput;
