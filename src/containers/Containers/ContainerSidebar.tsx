import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ContainerItem } from './ContainerItem';
import {
	ContainerItemTitle,
	ContainerItemTitleProps,
} from './ContainerItemTitle';
import { ContainerRounded } from './ContainerRounded';

const useStyles = makeStyles((theme) => ({
	title: {
		margin: '0 0 -6px',
		textAlign: 'left',

		display: 'flex',
		justifyContent: 'space-between',
	},
	titleText: {
		fontSize: 19,
		fontWeight: 800,
	},
	titleButton: {},
	recomendations: {
		textAlign: 'left',
	},
	buttonMore: {
		padding: '5px 0',
		textAlign: 'left',
		fontSize: 15,
		color: theme.palette.primary.main,
		cursor: 'pointer',
	},
}));

interface ContainerSidebarProps extends ContainerItemTitleProps {
	title: string;
	onClickShowMore?: () => void;
}

export const ContainerSidebar: React.FC<ContainerSidebarProps> = ({
	title,
	titleButton,
	children,
	onClickShowMore,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerRounded>
			<ContainerItem hoverType='disabled'>
				<ContainerItemTitle titleButton={titleButton}>
					{title}
				</ContainerItemTitle>
			</ContainerItem>
			{children}
			<ContainerItem hoverType='bottom'>
				<div
					className={classes.buttonMore}
					onClick={() => onClickShowMore && onClickShowMore()}
				>
					Показать еще
				</div>
			</ContainerItem>
		</ContainerRounded>
	);
};
