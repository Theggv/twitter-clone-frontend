import { makeStyles } from '@material-ui/core';
import React, { createRef, useEffect, useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'sticky',
		top: 0,
        
		height: 54,
        paddingTop: 5,
        
		backgroundColor: 'white',
		zIndex: 1000,
	},
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',

		borderRadius: '100px',
		boxSizing: 'border-box',

		border: '1px solid transparent',
		backgroundColor: 'rgb(235, 238, 240)',

		'&:focus-within': {
			backgroundColor: 'white',
			border: '1px solid ' + theme.palette.primary.main,

			'& svg': {
				color: theme.palette.primary.main,
			},
		},
	},
	iconContainer: {
		display: 'flex',
		alignitems: 'center',
		paddingLeft: 15,
		maxWidth: 40,
		maxHeight: 40,
		color: 'rgb(91, 112, 131)',
	},
	inputContainer: {
		marginLeft: 10,
		flex: '1',
		display: 'flex',
		alignItems: 'center',

		'& input': {
			padding: 0,
			margin: '10px 0',
			fontFamily: theme.typography.fontFamily,
			width: '100%',
			fontSize: 15,
			fontWeight: 400,
			border: 'none',
			resize: 'none',
			backgroundColor: 'transparent',
		},
		'& input:focus': {
			outline: 'none',
		},
		'& input::placeholder': {
			color: 'rgb(101, 119, 134)',
		},
	},
}));

const useInput = (initialValue: string = '') => {
	const [value, setValue] = useState(initialValue);
	const [focused, setFocused] = useState(false);

	return {
		bind: {
			value,
			onFocus: () => setFocused(true),
			onBlur: () => setFocused(false),
			onChange: (event: any) => setValue((prev) => event.target.value),
		},
		value,
		setValue,
		focused,
		clear: () => setValue((prev) => ''),
	};
};

const Search = () => {
	const classes = useStyles();
	const input = useInput();
	const rootRef = createRef<HTMLDivElement>();

	useEffect(() => {
		if (input.focused) {
			const root = rootRef.current;
			root && root.focus();
		}
	}, [input.focused, rootRef]);

	return (
		<div className={classes.root} ref={rootRef}>
			<div className={classes.container}>
				<div className={classes.iconContainer}>
					<SearchIcon />
				</div>
				<div className={classes.inputContainer}>
					<input
						{...input.bind}
						placeholder={'Поиск в Твиттере'}
					></input>
				</div>
			</div>
		</div>
	);
};

export default Search;
