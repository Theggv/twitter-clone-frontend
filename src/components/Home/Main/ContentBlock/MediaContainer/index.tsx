import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { GifElement } from './GifElement';
import { ImageLink } from './ImageLink';
import { VideoElement } from './VideoElement';

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

export interface MediaElement {
	path: string;
	type: string;
}

export interface MediaContainerProps {
	media?: MediaElement[];
	editable?: boolean;
	onRemove?: (src: string) => void;
}

export const MediaContainer: React.FC<MediaContainerProps> = ({
	media,
	editable = false,
	onRemove,
}) => {
	const classes = useStyles();

	if (!media?.length) return null;

	const handleDeleteClick = (src: string) => {
		onRemove && onRemove(src);
	};

	const content = () => {
		if (media[0].type.includes('video'))
			return (
				<div className={classes.container}>
					<VideoElement
						src={media[0].path}
						editable={editable}
						onClose={handleDeleteClick}
					/>
				</div>
			);
		else if (media[0].type.includes('image/gif'))
			return (
				<div className={classes.container}>
					<GifElement
						src={media[0].path}
						editable={editable}
						onClose={handleDeleteClick}
					/>
				</div>
			);
		else if (media[0].type.includes('text')) return null;
		else
			return (
				<React.Fragment>
					<div className={classes.container}>
						<ImageLink
							src={media[0].path}
							editable={editable}
							onClose={handleDeleteClick}
						/>
						{media.length > 3 && (
							<ImageLink
								src={media[3].path}
								onClose={handleDeleteClick}
							/>
						)}
					</div>
					{media.length > 1 && (
						<div
							className={clsx(
								classes.container,
								classes.splitterRight
							)}
						>
							<ImageLink
								src={media[1].path}
								onClose={handleDeleteClick}
							/>
							{media.length > 2 && (
								<ImageLink
									src={media[2].path}
									className={classes.splitterBottom}
									onClose={handleDeleteClick}
								/>
							)}
						</div>
					)}
				</React.Fragment>
			);
	};

	return <div className={classes.root}>{content()}</div>;
};
