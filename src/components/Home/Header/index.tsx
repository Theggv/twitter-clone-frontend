import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { ContainerBase } from '../../../containers/Containers';

import { IconButton } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import SettingsIcon from '@material-ui/icons/Settings';
import HashtagIcon from '../../../containers/Icons/HashtagIcon';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/PersonOutlineOutlined';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CreatePostModal from '../../Modal/CreatePostModal';

import { useDispatch, useSelector } from 'react-redux';
import {
	LoadingState,
	selectHeaderLoading,
	setHeaderLoadingState,
} from '../../../store/ducks/loading';
import { LoaderCircular } from '../../../containers/Loaders';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.up('sm')]: {
			minWidth: '88px',
		},
		[theme.breakpoints.down(1005)]: {
			maxWidth: '190px',
		},

		minWidth: '68px',
		maxWidth: '275px',

		flex: '1 1',
		display: 'block',

		overflowX: 'hidden',
		overflowY: 'auto',
		height: '100vh',

		position: 'sticky',
		top: 0,

		borderRight: '1px solid rgba(128,128,128,0.15)',
	},
	menuWrapper: {
		[theme.breakpoints.down('sm')]: {
			padding: 0,
			justifyContent: 'center',
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			padding: '0 18px 0 0',
			justifyContent: 'flex-end',
		},
		[theme.breakpoints.up('lg')]: {
			padding: '0 10px',
			justifyContent: 'flex-start',
		},

		margin: 0,
		flex: '1 1',
		display: 'flex',
		justifyContent: 'flex-end',
		paddingRight: 18,

		'& ul': {
			padding: 0,
			margin: 0,
			listStyleType: 'none',
			maxWidth: '100%',
		},

		'& li': {
			display: 'block',
		},
	},
	buttonTwitter: {
		padding: '6px',
		margin: '0 1px',
		borderRadius: '100px',
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.text.primary,
		fontSize: 19,
		fontWeight: 700,

		'& svg': {
			fontSize: 30,
			padding: '2px 0',
			color: theme.palette.text.primary,
		},

		'&:hover': {
			color: theme.palette.primary.main,
		},
	},
	buttonTwitterSelected: {
		padding: '6px',
		margin: '0 1px',
		borderRadius: '100px',
		fontFamily: theme.typography.fontFamily,
		color: theme.palette.primary.main,
		fontSize: 19,
		fontWeight: 700,

		'& svg': {
			fontSize: 30,
			padding: '2px 0',
			color: theme.palette.primary.main,
		},
	},
	buttonText: {
		margin: '0 20px',
	},
	buttonCreatePost: {
		marginTop: 10.5,
		width: 230,
		minHeight: 49,
	},
	twitterIcon: {
		margin: '3px',

		'& svg': {
			fontSize: 32,
		},
	},
}));

const Header: React.FC = (): React.ReactElement | null => {
	const theme = useTheme();
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.up('lg'));

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [selection, setSelection] = useState('Главная');
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [isAuth, setAuth] = useState(true);

	const [createPostVisible, setCreatePostVisible] = useState(false);

	const dispatch = useDispatch();
	const isLoading = useSelector(selectHeaderLoading);

	React.useEffect(() => {
		dispatch(setHeaderLoadingState(LoadingState.LOADED));
	}, [dispatch]);

	const Wrapper: React.FC = ({ children }) => (
		<ContainerBase className={classes.root}>
			<div className={classes.menuWrapper}>{children}</div>
		</ContainerBase>
	);

	if (isLoading) {
		return (
			<Wrapper>
				<LoaderCircular />
			</Wrapper>
		);
	}

	const TwitterIconButton: React.FC<{
		name?: string;
		selected?: boolean;
		onClick?: () => void;
	}> = ({ children, name = '', selected = false, onClick }) => {
		const iconButtonClassName = () =>
			selection === name || selected
				? classes.buttonTwitterSelected
				: classes.buttonTwitter;

		return (
			<IconButton
				color='primary'
				className={iconButtonClassName()}
				onClick={onClick}
			>
				{children}
				{matches ? (
					<div className={classes.buttonText}>{name}</div>
				) : null}
			</IconButton>
		);
	};

	return (
		<Wrapper>
			{isAuth ? (
				<ul>
					<li>
						<IconButton
							color='primary'
							className={
								classes.buttonTwitterSelected +
								' ' +
								classes.twitterIcon
							}
						>
							<TwitterIcon />
						</IconButton>
					</li>
					<li>
						<TwitterIconButton name='Главная'>
							<HomeIcon />
						</TwitterIconButton>
					</li>
					<li>
						<TwitterIconButton name='Поиск'>
							<HashtagIcon />
						</TwitterIconButton>
					</li>
					<li>
						<TwitterIconButton name='Уведомления'>
							<NotificationsIcon />
						</TwitterIconButton>
					</li>
					<li>
						<TwitterIconButton name='Сообщения'>
							<MailOutlineIcon />
						</TwitterIconButton>
					</li>
					<li>
						<TwitterIconButton name='Профиль'>
							<PersonIcon />
						</TwitterIconButton>
					</li>
					<li>
						<TwitterIconButton name='Ещё'>
							<MoreHorizIcon />
						</TwitterIconButton>
					</li>
					<li>
						{matches ? (
							<Button
								variant='contained'
								color='primary'
								fullWidth
								className={classes.buttonCreatePost}
								onClick={() => setCreatePostVisible(true)}
							>
								Твитнуть
							</Button>
						) : (
							<TwitterIconButton
								selected
								onClick={() => setCreatePostVisible(true)}
							>
								<AddCircleIcon />
							</TwitterIconButton>
						)}
					</li>
				</ul>
			) : (
				<ul>
					<li>
						<IconButton
							className={
								classes.buttonTwitterSelected +
								' ' +
								classes.twitterIcon
							}
						>
							<TwitterIcon color='primary' />
						</IconButton>
					</li>
					<li>
						<TwitterIconButton name='Поиск'>
							<HashtagIcon />
						</TwitterIconButton>
					</li>
					<li>
						<TwitterIconButton name='Настройки'>
							<SettingsIcon />
						</TwitterIconButton>
					</li>
				</ul>
			)}
			<CreatePostModal
				visible={createPostVisible}
				onClose={() => setCreatePostVisible(false)}
			></CreatePostModal>
		</Wrapper>
	);
};

export default Header;
