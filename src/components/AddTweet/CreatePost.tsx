import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react';

import AutoSizeTextArea from './AutoSizeTextArea';

import GifIcon from '../../containers/Icons/GifIcon';
import PollIcon from '@material-ui/icons/PollOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleIcon from '@material-ui/icons/ScheduleOutlined';
import { ContainerAvatar } from '../../containers/Containers';
import { ButtonFileDialog, ButtonWithIcon } from '../../containers/Buttons';
import { LengthCounter } from './LengthCounter';
import { MediaContainer, MediaElement } from '../MediaContainer/MediaContainer';
import clsx from 'clsx';

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
	className?: string;
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
	className,
}): React.ReactElement => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up(705), { noSsr: true });

	const [inputValue, setInputValue] = useState('');
	const [media, setMedia] = useState<MediaElement[]>([]);

	const leftSymbols = MAX_LENGTH - inputValue.length;
	const isSubmitButtonDisable = !inputValue.length || leftSymbols < 0;

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (!event.target || !event.target.files) return;
		let files = event.target.files;

		let arr: MediaElement[] = [];
		for (let i = 0; i < files.length; ++i) {
			arr.push({
				path: URL.createObjectURL(files[i]),
				type: files[i].type,
			});
		}

		setMedia((prev) => [...prev, ...arr]);
	};

	const handleRemove = (src: string) => {
		setMedia((prev) => prev.filter((x) => x.path !== src));
	};

	const canUploadFiles = React.useMemo(() => {
		if (
			media.find((x) => x.type.includes('video')) ||
			media.find((x) => x.type === 'image/gif') ||
			media.length >= 4
		)
			return false;

		return true;
	}, [media]);

	const buttonsArea = React.useMemo(
		() => (
			<div className={classes.buttonsArea}>
				<ButtonFileDialog
					onChange={handleFileUpload}
					size={16}
					disabled={!canUploadFiles}
				></ButtonFileDialog>
				<ButtonWithIcon
					size={40}
					icon={<GifIcon style={{ fontSize: 19 }} />}
				/>
				{matches && <ButtonWithIcon size={40} icon={<PollIcon />} />}
				<ButtonWithIcon size={40} icon={<EmojiIcon />} />
				{matches && (
					<ButtonWithIcon size={40} icon={<ScheduleIcon />} />
				)}
			</div>
		),
		[classes.buttonsArea, matches, canUploadFiles]
	);

	return (
		<ContainerAvatar
			hoverType='disabled'
			source={author.avatar}
			className={classes.root}
		>
			<div className={clsx(classes.inputArea, className)}>
				<AutoSizeTextArea
					maxSymbols={280}
					minRows={minRows}
					onChange={(text) => {
						setInputValue(text);
					}}
				>
					{media && media.length ? (
						<div className={classes.media}>
							<MediaContainer
								media={media}
								editable
								onRemove={handleRemove}
							/>
						</div>
					) : null}
				</AutoSizeTextArea>
			</div>
			<div className={classes.bottomArea}>
				{buttonsArea}
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
