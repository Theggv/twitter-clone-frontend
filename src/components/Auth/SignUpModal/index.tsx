import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link, makeStyles } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import {
	ContainerModal,
	ContainerModalProps,
} from '../../../containers/Containers';
import { InputElement } from '../InputElement';
import { SelectElement } from '../SelectElement';
import { NameInput } from './NameInput';
import { SignUpActionTypes, SignUpReducer } from './reducer/SignUpReducer';
import { EmailInput } from './EmailInput';
import { SignUpForm } from './SignUpForm';

const useStyles = makeStyles((theme) => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dialogContent: {
		margin: '0px 5px',
	},
	headerIcon: {
		fontSize: 28,
		marginRight: '15px',
	},
	headerButtonNext: {
		marginRight: 5,
		marginTop: 5,
		padding: '0px 16px',
		minHeight: 30,
	},
	headerWrapper: {
		display: 'flex',
		justifyContent: 'flex-end',
		flex: 1,
		maxWidth: '100%',
	},
	dialogTitle: {
		fontSize: 23,
		fontWeight: 700,
		marginBottom: 15,
	},
	phoneMailButton: {
		fontSize: 15,
		marginTop: 7,
	},
	birthdayText: {
		fontSize: 15,
		marginTop: 28,
		lineHeight: '20px',
		color: 'rgb(101, 119, 134)',

		'& b': {
			color: 'black',
		},
	},
	birthdayInputs: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '15px 0 30px',
		flex: '0 0 auto',
	},
	birthdayMonth: {
		flex: '10',
		paddingRight: 10,
	},
	birthdayDay: {
		flex: '5',
		paddingRight: 10,
	},
	birthdayYear: {
		flex: '6',
	},
}));

interface SignUpDialogProps extends ContainerModalProps {}

export const SignUpModal: React.FC<SignUpDialogProps> = ({
	visible = false,
	onClose,
}) => {
	const classes = useStyles();
	
	useEffect(() => {
		if (visible) document.title = 'Зарегистрироваться в Твиттере / Твиттер';
	}, [visible]);

	const titleBlock = (
		<div className={classes.header}>
			<div className={classes.headerWrapper}></div>
			<TwitterIcon color='primary' className={classes.headerIcon} />
			<div className={classes.headerWrapper}>
				<Button
					className={classes.headerButtonNext}
					variant='contained'
					color='primary'
					disabled
				>
					Далее
				</Button>
			</div>
		</div>
	);

	return (
		<ContainerModal
			visible={visible}
			onClose={onClose}
			title={() => titleBlock}
			disableExitButton
		>
			<SignUpForm />
		</ContainerModal>
	);
};
