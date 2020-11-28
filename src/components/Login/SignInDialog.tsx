import React, { useEffect, useMemo, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link, makeStyles } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import TwitterInput from './TwitterInput';
import ModalWindow, { ModalWindowProps } from '../Modal/ModalWindow';

const useStyles = makeStyles((theme) => ({
	title: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleIcon: {
		fontSize: 35,
		marginRight: '15px',
	},
	errorMessage: {
		color: theme.palette.error.main,
		fontSize: 15,
	},
	dialogTitle: {
		fontSize: 23,
		fontWeight: 700,
		margin: '15px 0',
		alignItems: 'center',
		textAlign: 'center',
	},
	inputsBlock: {
		margin: '0 5px',
	},
	loginButton: {
		marginRight: 5,
		marginTop: 5,
		padding: '0px 16px',
		minHeight: 45,
	},
	helpBlock: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		margin: '15px 0 30px',
		flex: '0 0 auto',
		fontSize: 15,
		color: 'rgb(101, 119, 134)',
	},
	rememberPasswordLink: {
		paddingRight: 5,
		fontSize: 'inherit',
	},
	signUpLink: {
		paddingLeft: 5,
		fontSize: 'inherit',
	},
}));

interface SignInDialogProps extends ModalWindowProps {}

const SignInDialog: React.FC<SignInDialogProps> = ({
	visible = false,
	onClose,
}) => {
	const classes = useStyles();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [errorMessage, setErrorMessage] = useState('');
	const [isValidationPassed, setValidationPassed] = useState(false);

	useEffect(() => {
		if (visible) document.title = 'Войти в Твиттер / Твиттер';
	}, [visible]);

	const [loginData, setLoginData] = useState({
		login: '',
		password: '',
	});

	useEffect(() => {
		let isValidationFailed = !loginData.login || !loginData.password;

		if (isValidationFailed !== isValidationPassed)
			setValidationPassed((prev) => isValidationFailed);
	}, [isValidationPassed, loginData]);

	const titleBlock = useMemo(
		() => (
			<div className={classes.title}>
				<TwitterIcon color='primary' className={classes.titleIcon} />
			</div>
		),
		[classes.title, classes.titleIcon]
	);

	return (
		<ModalWindow
			visible={visible}
			onClose={onClose}
			title={() => titleBlock}
			disableExitButton
		>
			<div className={classes.dialogTitle}>Войти в Твиттер</div>
			{errorMessage ? (
				<div className={classes.errorMessage}>{errorMessage}</div>
			) : null}
			<div className={classes.inputsBlock}>
				<TwitterInput
					autoFocus
					fullWidth
					title='Номер телефона, адрес электронной почты или имя пользователя'
					validationFunc={(text: string) => {
						setLoginData((prev) => ({ ...prev, login: text }));
						return undefined;
					}}
				></TwitterInput>
				<TwitterInput
					fullWidth
					title='Пароль'
					type='password'
					validationFunc={(text: string) => {
						setLoginData((prev) => ({
							...prev,
							password: text,
						}));
						return undefined;
					}}
				></TwitterInput>
			</div>

			<Button
				className={classes.loginButton}
				variant='contained'
				color='primary'
				disabled={isValidationPassed}
				fullWidth
			>
				Войти
			</Button>
			<div className={classes.helpBlock}>
				<Link
					className={classes.rememberPasswordLink}
					component='button'
					variant='body2'
				>
					Забыли пароль?
				</Link>
				·
				<Link
					className={classes.signUpLink}
					component='button'
					variant='body2'
				>
					Зарегистрироваться в Твиттере
				</Link>
			</div>
		</ModalWindow>
	);
};

export default SignInDialog;
