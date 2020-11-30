import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

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
}));

interface ImageLinkProps {
	src: string;
	className?: string;
}

export const ImageLink: React.FC<ImageLinkProps> = ({ src, className }) => {
	const classes = useStyles();

	return (
		<a
			className={clsx(classes.link, className)}
			href={src}
			target='_blank'
			rel='noopener noreferrer'
		>
			<div
				className={classes.container}
				style={{ backgroundImage: `url(${src})` }}
			>
				<img src={src} alt='' />
			</div>
		</a>
	);
};
