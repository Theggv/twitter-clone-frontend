import { makeStyles } from '@material-ui/core';
import React from 'react';
import { DeleteButton } from '../../containers/Buttons/DarkButton';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		width: '100%',
		height: '100%',
	},
	video: {
		width: '100%',
		height: '100%',
		cursor: 'pointer',

		'&:focus': {
			outline: 'none',
		},
	},
	deleteButton: {
		position: 'absolute',
		top: 5,
		left: 5,
	},
}));

interface VideoElementProps {
	src: string;
	editable?: boolean;
	onClose?: (src: string) => void;
}

export const VideoElement: React.FC<VideoElementProps> = ({
	src,
	editable = true,
	onClose,
}) => {
	const classes = useStyles();

	const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		onClose && onClose(src);

		e.stopPropagation();
		e.preventDefault();
	};

	return (
		<div className={classes.root}>
			<video className={classes.video} controls loop playsInline muted>
				<source src={src}></source>
			</video>
			{editable && (
				<DeleteButton
					className={classes.deleteButton}
					onClick={handleDeleteClick}
				/>
			)}
		</div>
	);
};
