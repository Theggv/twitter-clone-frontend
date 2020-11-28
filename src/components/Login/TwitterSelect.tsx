import {
	FormControl,
	FormControlProps,
	InputLabel,
	// makeStyles,
	NativeSelect,
} from '@material-ui/core';
import React, { useState } from 'react';

interface TwitterSelectProps {
	title: string;
	items: Array<any>;
	fullWidth?: boolean;
	onItemChange?: (item: string) => void;
}

// const useStyles = makeStyles((theme) => ({}));

const TwitterSelect: React.FC<FormControlProps & TwitterSelectProps> = (
	props
) => {
	// const classes = useStyles();

	const [state, setState] = useState({ selected: '' });

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setState((prev) => ({ ...state, selected: event.target.value }));

		if (props.onItemChange) props.onItemChange(event.target.value);
	};

	return (
		<FormControl {...props}>
			<InputLabel shrink disableAnimation>
				{props.title}
			</InputLabel>
			<NativeSelect
				value={state.selected}
				onChange={(e) => handleChange(e)}
				variant='filled'
			>
				<option aria-label='' disabled value='' key=''></option>
				{props.items.map((item) => (
					<option value={item} key={item}>
						{item}
					</option>
				))}
			</NativeSelect>
		</FormControl>
	);
};

export default TwitterSelect;
