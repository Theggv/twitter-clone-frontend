import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { DeleteButton } from '../../containers/Buttons/DarkButton';

const useStyles = makeStyles((theme) => ({
	link: {
		display: 'flex',
		flex: 1,
		border: '1px solid rgba(128, 128, 128, 0.15)',
	},
	container: {
		flex: 1,

		position: 'relative',

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
}));

interface ImageLinkElementProps {
	src: string;
	className?: string;
	editable?: boolean;
	onClose?: (src: string) => void;
}

export const ImageLinkElement: React.FC<ImageLinkElementProps> = ({
	src,
	className,
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
		<Link
			className={clsx(classes.link, className)}
			to={src}
			target='_blank'
		>
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
			</div>
		</Link>
	);
};
