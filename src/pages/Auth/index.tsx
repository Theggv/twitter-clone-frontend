import React, { useEffect, useState } from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';

import { SignUpModal } from '../../components/Auth/SignUpModal';
import { SignInModal } from '../../components/Auth/SignInModal';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up(800)]: {
			height: '100vh',
		},
		display: 'flex',
		flexDirection: 'column',
	},
	main: {
		[theme.breakpoints.down(800)]: {
			flexDirection: 'column-reverse',
		},
		display: 'flex',
		flex: 1,
	},
	footer: {
		height: 80,
	},
	blueBlock: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#71C9F8',
		flex: 1,
		position: 'relative',
		overflow: 'hidden',
	},
	blueBlockListInfo: {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		maxWidth: 380,
		position: 'relative',

		'& h6': {
			fontSize: 19,
			fontWeight: 'bold',
			cursor: 'default',
			color: 'white',
			marginTop: 40,
			marginBottom: 40,
			display: 'flex',
			alignItems: 'center',
		},
	},
	blueBlockListInfoIcon: {
		fontSize: 30,
		marginRight: 14,
	},
	blueBlockBigIcon: {
		position: 'absolute',
		left: '74%',
		top: '53%',
		width: '200%',
		height: '200%',
		transform: 'translate(-50%, -50%)',
	},
	loginSide: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	},
	loginSideWrapper: {
		maxWidth: 380,
		padding: 0,
	},
	loginSideWrapperIcon: {
		margin: 0,
		fontSize: 45,
		transform: 'translate(-1px, 0px)',
	},
	loginSideTitle: {
		fontSize: 30,
		lineHeight: '39.375px',
		fontWeight: 'bold',
		marginBottom: 58,
		marginTop: 15,
	},
	loginSideSubTitle: {
		marginBottom: 13,
		fontSize: 15,
		fontWeight: 'bold',
	},
	loginSideButtonSignUp: {
		marginBottom: 15,
	},
	loginSideButtonSignIn: {
		marginBottom: 19,
	},
}));

export const Auth: React.FC = (): React.ReactElement => {
	const classes = useStyles();

	const [dialog, setDialog] = useState<'signIn' | 'signUp'>();

	useEffect(() => {
		if (!dialog)
			document.title =
				'Твиттер. Здесь обсуждают всё, что происходит. / Твиттер';
	}, [dialog]);

	const openDialogSignIn = () => setDialog('signIn');
	const openDialogSignUp = () => setDialog('signUp');
	const closeDialog = () => setDialog(undefined);

	return (
		<div className={classes.root}>
			<main className={classes.main}>
				<section className={classes.blueBlock}>
					<TwitterIcon
						color='primary'
						className={classes.blueBlockBigIcon}
					/>
					<ul className={classes.blueBlockListInfo}>
						<li>
							<Typography variant='h6'>
								<SearchIcon
									className={classes.blueBlockListInfoIcon}
								/>
								Читайте о том, что вам интересно.
							</Typography>
						</li>
						<li>
							<Typography variant='h6'>
								<PeopleIcon
									className={classes.blueBlockListInfoIcon}
								/>
								Узнайте, о чем говорят в мире.
							</Typography>
						</li>
						<li>
							<Typography variant='h6'>
								<MessageIcon
									className={classes.blueBlockListInfoIcon}
								/>
								Присоединяйтесь к общению.
							</Typography>
						</li>
					</ul>
				</section>
				<section className={classes.loginSide}>
					<div className={classes.loginSideWrapper}>
						<TwitterIcon
							color='primary'
							className={classes.loginSideWrapperIcon}
						/>
						<Typography
							variant='h4'
							className={classes.loginSideTitle}
						>
							Узнайте, что происходит в мире прямо сейчас
						</Typography>
						<Typography className={classes.loginSideSubTitle}>
							Присоединяйтесь к Твиттеру прямо сейчас!
						</Typography>
						<Button
							variant='contained'
							color='primary'
							fullWidth
							className={classes.loginSideButtonSignUp}
							onClick={openDialogSignUp}
						>
							Зарегистрироваться
						</Button>
						<Button
							variant='outlined'
							color='primary'
							fullWidth
							className={classes.loginSideButtonSignIn}
							onClick={openDialogSignIn}
						>
							Войти
						</Button>
						<SignUpModal
							visible={dialog === 'signUp'}
							onClose={closeDialog}
						></SignUpModal>
						<SignInModal
							visible={dialog === 'signIn'}
							onClose={closeDialog}
						></SignInModal>
					</div>
				</section>
			</main>
			<footer className={classes.footer}></footer>
		</div>
	);
};
