import { Dialog, makeStyles } from '@material-ui/core';
import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { ContainerItem } from '../../containers/Containers';
import { ButtonWithIcon } from '../../containers/Buttons';
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
}));

export interface ModalWindowProps {
	className?: string;
	visible?: boolean;
	onClose?: () => void;
}

const ModalWindow: React.FC<
	ModalWindowProps & {
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

	return (
		<Dialog
			open={visible}
			onClose={onClose}
			className={classes.dialog}
			fullWidth={fullWidth}
		>
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
		</Dialog>
	);
};

export default ModalWindow;
