import React, { useEffect, useState } from 'react';
import { makeStyles, TextField, TextFieldProps } from '@material-ui/core';
import { useDebounce } from '../../helpers/useDebounce';

interface InputElementProps {
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
		if (!state.isInit) setState({ ...state, isInit: true });
	}, [state]);

	useEffect(() => {
		if (value && state.isInit && !state.isUsed)
			setState({ ...state, isUsed: true });
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

export const InputElement: React.FC<TextFieldProps & InputElementProps> = (
	props
) => {
	const classes = useStyles();
	const input = useInput('', props.maxLength);
	const [errorText, setErrorText] = useState<string | undefined>(undefined);

	const deboncedInputValue = useDebounce(input.value, 200);

	useEffect(() => {
		if (input.isUsed && props.validationFunc) {
			let validation = props.validationFunc!(deboncedInputValue);
			setErrorText((prev) => (validation === prev ? prev : validation));
		}
	}, [deboncedInputValue, props.validationFunc, input.isUsed]);

	useEffect(() => {
		if (input.isUsed) {
			input.clear();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.title]);

	const hasError = input.isUsed && errorText !== undefined;

	const helperText = (
		<div className={classes.helperText}>
			<div>{hasError && errorText}</div>
			{props.maxLength && (
				<div className={classes.statusText}>
					{input.value.length}/{props.maxLength}
				</div>
			)}
		</div>
	);

	console.log('render of InputElement ' + props.title);

	return (
		<TextField
			autoFocus={props.autoFocus}
			label={props.title}
			helperText={helperText}
			fullWidth={props.fullWidth}
			error={hasError}
			InputLabelProps={{
				shrink: false,
				disableAnimation: true,
			}}
			variant='filled'
			{...input.bind}
		></TextField>
	);
};
