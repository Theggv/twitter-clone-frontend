import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ButtonWithIcon } from '.';
import ShiningIcon from '../Icons/ShiningIcon';

const useStyles = makeStyles((theme) => ({
	button: {
		padding: '0 8px',
	},
}));

interface SettingsButtonProps {
	onClick?: () => void;
}

export const ButtonSettings: React.FC<SettingsButtonProps> = ({ onClick }) => {
	const classes = useStyles();

	return (
		<ButtonWithIcon
			className={classes.button}
			icon={<ShiningIcon />}
			onClick={onClick}
		/>
	);
};
