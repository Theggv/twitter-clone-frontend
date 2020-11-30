import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { ImageLink } from './ImageLink';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		height: '285px',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
	},
	splitterRight: {
		marginLeft: 1,
	},
	splitterBottom: {
		marginTop: 1,
	},
}));

interface TweetImagesProps {
	media?: Array<string>;
}

export const TweetImages: React.FC<TweetImagesProps> = ({ media }) => {
	const classes = useStyles();

	if (!media?.length) return null;

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<ImageLink src={media[0]} />
				{media.length > 3 && <ImageLink src={media[3]} />}
			</div>
			{media.length > 1 && (
				<div className={clsx(classes.container, classes.splitterRight)}>
					<ImageLink src={media[1]} />
					{media.length > 2 && (
						<ImageLink
							src={media[2]}
							className={classes.splitterBottom}
						/>
					)}
				</div>
			)}
		</div>
	);
};
