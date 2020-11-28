import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

import { useLazyImageLoading } from '../../helpers';
import { ContainerBaseProps } from '../Containers';

const useStyles = makeStyles((theme) => ({
	container: {
		position: 'relative',

		'&:hover': {
			'& img': {
				backgroundColor: 'rgba(26, 26, 26, 0.15)',
			},
		},
	},
	hover: {
		position: 'absolute',
		top: 0,

		boxSizing: 'border-box',
		borderRadius: '100%',
		transitionDuration: '0.2s',

		'&:hover': {
			backgroundColor: 'rgba(26, 26, 26, 0.15)',
		},
	},
	hoverBorder: {
		border: '5px solid white',
	},
	img: {
		boxSizing: 'border-box',
		borderRadius: '100%',
	},
	default: {
		width: 49,
		height: 49,
	},
	small: {
		width: 20,
		height: 20,
	},
	big: {
		width: 134,
		height: 134,
	},
	placeholder: {
		backgroundColor: 'rgba(128, 128, 128, 0.5)',
	},
}));

export interface AvatarProps extends ContainerBaseProps {
	source?: string;
	size?: 'small' | 'default' | 'big';
}

export const Avatar: React.FC<AvatarProps> = ({
	source,
	size = 'default',
	className,
}) => {
	const classes = useStyles();
	const { isLoaded } = useLazyImageLoading(source);

	const defaultSrc =
		'https://abs.twimg.com/sticky/default_profile_images/default_profile_bigger.png';

	const AvatarImage = (src?: string, className?: string) => (
		<img
			className={clsx(
				classes.img,
				size === 'default' && classes.default,
				size === 'small' && classes.small,
				size === 'big' && classes.big,
				className
			)}
			src={src}
			alt=''
		></img>
	);

	const avatar = isLoaded
		? source
			? AvatarImage(source)
			: AvatarImage(defaultSrc)
		: AvatarImage(undefined, classes.placeholder);

	return (
		<div className={clsx(classes.container, className)}>
			{avatar}
			<div
				className={clsx(
					classes.hover,
					size === 'default' && classes.default,
					size === 'small' && classes.small,
					size === 'big' && [classes.big, classes.hoverBorder]
				)}
			></div>
		</div>
	);
};
