import { makeStyles } from '@material-ui/core';
import React from 'react';
import { DarkButton, DeleteButton } from '../../containers/Buttons/DarkButton';

const useStyles = makeStyles((theme) => ({
	container: {
		flex: 1,

		position: 'relative',
		cursor: 'pointer',

		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',

		'& img': {
			position: 'absolute',
			width: '100%',
			height: '100%',
			opacity: 0,
		},
	},
	deleteButton: {
		position: 'absolute',
		top: 5,
		left: 5,
	},
	gifLabel: {
		position: 'absolute',
		bottom: 5,
		left: 10,
		fontSize: 13,
	},
}));

interface GifElementProps {
	src: string;
	editable?: boolean;
	onClose?: (src: string) => void;
}

export const GifElement: React.FC<GifElementProps> = ({
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
		<div
			className={classes.container}
			style={{ backgroundImage: `url(${src})` }}
		>
			<img src={src} alt='' />
			{editable && (
				<DeleteButton
					className={classes.deleteButton}
					onClick={handleDeleteClick}
				/>
			)}
			<DarkButton className={classes.gifLabel}>GIF</DarkButton>
		</div>
	);
};
