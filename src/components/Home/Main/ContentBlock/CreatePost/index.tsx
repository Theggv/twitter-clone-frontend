import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react';

import AutoSizeTextArea from './AutoSizeTextArea';

import GifIcon from '../../../../../containers/Icons/GifIcon';
import PollIcon from '@material-ui/icons/PollOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined';
import { ContainerAvatar } from '../../../../../containers/Containers';
import {
	ButtonFileDialog,
	ButtonWithIcon,
} from '../../../../../containers/Buttons';
import { LengthCounter } from './LengthCounter';
import { TweetImages } from '../Tweet/TweetImages';

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
		flexDirection: 'column',
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
	media: {
		marginTop: 10,
		padding: 0,
		borderRadius: 16,
		border: '1px solid rgba(128, 128, 128, 0.15)',
		overflow: 'hidden',
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
	const [media, setMedia] = useState<Array<any>>([]);

	const leftSymbols = MAX_LENGTH - inputValue.length;
	const isSubmitButtonDisable = !inputValue.length || leftSymbols < 0;

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMedia((prev) => {
			if (event.target && event.target.files)
				return [...prev, URL.createObjectURL(event.target.files[0])];
			return prev;
		});
	};

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
				>
					{media && media.length ? (
						<div className={classes.media}>
							<TweetImages media={media}></TweetImages>
						</div>
					) : null}
				</AutoSizeTextArea>
			</div>
			<div className={classes.bottomArea}>
				<div className={classes.buttonsArea}>
					<ButtonFileDialog
						onChange={handleFileUpload}
						size={16}
					></ButtonFileDialog>
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
					{inputValue && (
						<LengthCounter
							input={inputValue}
							maxLength={MAX_LENGTH}
						/>
					)}
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
