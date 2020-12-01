import { CircularProgress, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	textLengthCounter: {
		position: 'relative',
	},
	circularStatic: {
		'& svg': {
			color: 'rgba(128,128,128,0.15)',
		},
	},
	circularActive: {
		position: 'absolute',
		top: 0,
		left: 0,

		transitionDuration: '0.1s',

		'& svg': {
			color: theme.palette.primary.main,
		},

		'& circle': {
			transition:
				'stroke-dashoffset 50ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
		},
	},
	circularYellow: {
		'& svg': {
			color: 'orange',
		},
	},
	circularRed: {
		'& svg': {
			color: 'red',
		},
	},
	circularBig: {
		marginRight: -5,
	},
	circularText: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: 30,
		height: 30,

		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 11,

		color: theme.palette.text.secondary,
	},
	circularTextRed: {
		color: 'red',
	},
	textLengthDivider: {
		margin: '0 15px',
		padding: '15px 0',
		borderRight: `1px solid rgba(128,128,128,0.15)`,
	},
}));

interface LengthCounterProps {
	maxLength: number;
	input: string;
}

export const LengthCounter: React.FC<LengthCounterProps> = ({
	maxLength,
	input,
}): React.ReactElement | null => {
	const classes = useStyles();

	const lengthRatio = (input.length / maxLength) * 100;
	const leftSymbols = maxLength - input.length;
	const circularSize = leftSymbols >= 20 ? 20 : 30;

	return (
		<>
			<div className={classes.textLengthCounter}>
				<CircularProgress
					className={clsx(
						classes.circularStatic,
						leftSymbols < 20 && classes.circularBig
					)}
					variant='static'
					value={100}
					size={circularSize}
				></CircularProgress>
				<CircularProgress
					className={clsx(classes.circularActive, [
						leftSymbols < 20 && classes.circularBig,
						leftSymbols <= 0 && classes.circularRed,
						leftSymbols > 0 &&
							leftSymbols < 20 &&
							classes.circularYellow,
					])}
					variant='static'
					value={lengthRatio < 100 ? lengthRatio : 100}
					size={circularSize}
				></CircularProgress>
				{leftSymbols < 20 && (
					<div
						className={clsx(
							classes.circularText,
							leftSymbols <= 0 && classes.circularTextRed
						)}
					>
						<span>{leftSymbols}</span>
					</div>
				)}
			</div>
			<div className={classes.textLengthDivider}></div>
		</>
	);
};
