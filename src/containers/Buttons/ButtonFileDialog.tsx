import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

import ImageIcon from '@material-ui/icons/ImageOutlined';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
}));

interface ButtonFileDialogProps {
	className?: string;
	size?: number;
	onClick?: () => void;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ButtonFileDialog: React.FC<ButtonFileDialogProps> = ({
	className,
	size = 30,
	onClick,
	onChange,
}) => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)}>
			<IconButton
				component='label'
				style={{ width: size, height: size }}
				color='primary'
				onClick={() => onClick && onClick()}
			>
				<ImageIcon />
				<input
					accept='image/*,video/*'
					hidden
					multiple
					id='button-upload-image'
					type='file'
					onChange={onChange}
				></input>
			</IconButton>
		</div>
	);
};
