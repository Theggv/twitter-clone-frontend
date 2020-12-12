import { makeStyles } from '@material-ui/core';
import React from 'react';

import { ButtonWithIcon } from '../../containers/Buttons';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { ContainerItem } from '../../containers/Containers';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'sticky',
		top: 0,
		minHeight: 54,
		zIndex: 1000,
		boxSizing: 'border-box',

		display: 'flex',
		flexDirection: 'column',

		backgroundColor: 'white',
		padding: '0 5px',
		justifyContent: 'center',
	},
	top: {
		display: 'flex',
		alignItems: 'center',
	},
	backButton: {
		margin: '-5px 10px -5px 0',
		padding: '0 5px',
	},
	title: {
		fontSize: 19,
		fontWeight: 800,
		flex: 1,
	},
}));

interface TopBlockProps {
	className?: string;
	title: React.ReactNode;
	showBackButton?: boolean;
}

export const TopBlock: React.FC<TopBlockProps> = ({
	className,
	children,
	title,
	showBackButton = false,
}) => {
	const classes = useStyles();

	const history = useHistory();

	const handleClickBack = () => {
		if (history.length <= 2) history.push('/home');
		else history.goBack();
	};

	return (
		<ContainerItem
			hoverType='disabled'
			className={clsx(classes.root, className)}
		>
			<div className={classes.top}>
				{showBackButton && (
					<ButtonWithIcon
						className={classes.backButton}
						icon={<ArrowBackIcon />}
						size={40}
						onClick={handleClickBack}
					/>
				)}
				<div className={classes.title}>{title}</div>
			</div>
			{children}
		</ContainerItem>
	);
};
