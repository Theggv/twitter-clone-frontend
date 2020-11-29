import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';

import AutoSizeTextArea from './AutoSizeTextArea';

import CircularProgress from '@material-ui/core/CircularProgress';

import GifIcon from '../../../../../containers/Icons/GifIcon';
import PollIcon from '@material-ui/icons/PollOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined';
import { ContainerAvatar } from '../../../../../containers/Containers';
import {
	ButtonFileDialog,
	ButtonWithIcon,
} from '../../../../../containers/Buttons';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: 97,

		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'column',
		flex: '1',
	},
	inputArea: {
		flex: '1',
		display: 'flex',
		justifyContent: 'flex-start',
	},
	bottomArea: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		flexWrap: 'wrap',
	},
	buttonsArea: {
		display: 'flex',
		justifyContent: 'flex-start',
		marginLeft: -10,
		marginTop: -2,
	},
	addTweetArea: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingRight: 3,
	},
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

interface CreatePostProps {
	author?: {
		avatar: string;
	};
	minRows?: number;
}

const MAX_LENGTH = 280;

const CreatePost: React.FC<CreatePostProps> = ({
	author = {
		avatar:
			'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png',
	},
	minRows = 1,
}): React.ReactElement => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up(705));

	const [inputValue, setInputValue] = useState('');

	const lengthRatio = (inputValue.length / MAX_LENGTH) * 100;
	const leftSymbols = MAX_LENGTH - inputValue.length;
	const circularSize = leftSymbols >= 20 ? 20 : 30;

	const isSubmitButtonDisable = !inputValue.length || leftSymbols < 0;

	const inputFieldLengthCounter = (
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

	return (
		<ContainerAvatar
			hoverType='disabled'
			source={author.avatar}
			className={classes.root}
		>
			<div className={classes.inputArea}>
				<AutoSizeTextArea
					maxSymbols={280}
					minRows={minRows}
					onChange={(text) => {
						setInputValue(text);
					}}
				></AutoSizeTextArea>
			</div>
			<div className={classes.bottomArea}>
				<div className={classes.buttonsArea}>
					<ButtonFileDialog size={16}></ButtonFileDialog>
					<ButtonWithIcon
						size={40}
						icon={<GifIcon style={{ fontSize: 19 }} />}
					/>
					{matches && (
						<ButtonWithIcon size={40} icon={<PollIcon />} />
					)}
					<ButtonWithIcon size={40} icon={<EmojiIcon />} />
					{matches && (
						<ButtonWithIcon size={40} icon={<ScheduleIcon />} />
					)}
				</div>
				<div className={classes.addTweetArea}>
					{inputValue && inputFieldLengthCounter}
					<Button
						variant='contained'
						color='primary'
						fullWidth
						disabled={isSubmitButtonDisable}
					>
						Твитнуть
					</Button>
				</div>
			</div>
		</ContainerAvatar>
	);
};

export default CreatePost;
