import { Dialog, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { ContainerItem } from './ContainerItem';
import { ButtonWithIcon } from '../Buttons';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	dialog: {
		'& .MuiDialogContent-root': {
			overflow: 'hidden',
			padding: 0,
		},
	},
	container: {},
	title: {
		display: 'flex',
	},
	titleContent: {
		flex: '1',
		textAlign: 'left',
	},
	content: {
		overflow: 'auto',
		padding: '10px 15px',
	},
	fullWidthRoot: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
		zIndex: 2000,
	},
}));

export interface ContainerModalProps {
	className?: string;
	visible?: boolean;
	onClose?: () => void;
}

export const ContainerModal: React.FC<
	ContainerModalProps & {
		title?: React.FC;
		withoutTitle?: boolean;
		disableExitButton?: boolean;
		fullWidth?: boolean;
	}
> = ({
	children,
	className,
	visible = false,
	onClose,
	title,
	withoutTitle = false,
	disableExitButton = false,
	fullWidth = false,
}) => {
	const classes = useStyles();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down(700));

	if (matches && !visible) return null;

	const Wrapper: React.FC = ({ children }) =>
		matches ? (
			<div className={classes.fullWidthRoot}>{children} </div>
		) : (
			<Dialog
				open={visible}
				onClose={onClose}
				className={classes.dialog}
				fullWidth={fullWidth}
			>
				{children}
			</Dialog>
		);

	return (
		<Wrapper>
			{!withoutTitle && (
				<ContainerItem hoverType='disabled' className={classes.title}>
					{!disableExitButton && (
						<ButtonWithIcon
							onClick={onClose}
							icon={<CloseIcon />}
						/>
					)}
					<div className={classes.titleContent}>
						{title && title({})}
					</div>
				</ContainerItem>
			)}
			<div className={clsx(classes.content, className)}>{children}</div>
		</Wrapper>
	);
};
