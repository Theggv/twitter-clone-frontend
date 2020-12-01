import { Button, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { ContainerBase } from '../../../containers/Containers';

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
import { HeaderButton } from '../../../containers/Buttons/Header/HeaderButton';
import { ButtonWithIcon } from '../../../containers/Buttons';
import { ButtonWithIconLink } from '../../../containers/Buttons/ButtonWithIconLink';

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
			alignItems: 'center',
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			padding: '0 20px 0 0',
			alignItems: 'flex-end',
		},
		[theme.breakpoints.up('lg')]: {
			padding: '0 10px',
			alignItems: 'flex-start',
		},

		margin: 0,
		flex: '1 1',
		display: 'flex',
		flexDirection: 'column',
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
	buttonsContainer: {
		flex: '1',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'inherit',
	},
	buttonCreatePost: {
		marginTop: 10.5,
		width: 230,
		minHeight: 49,
	},
	twitterIcon: {
		margin: '2px -3px 4px 1px',

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

	return (
		<Wrapper>
			<ButtonWithIconLink
				to='/'
				buttonProps={{
					className: classes.twitterIcon,
					size: 49,
					icon: <TwitterIcon />,
				}}
			/>
			{isAuth ? (
				<div className={classes.buttonsContainer}>
					<HeaderButton
						icon={<HomeIcon />}
						text='Главная'
						showText={matches}
					/>
					<HeaderButton
						icon={<HashtagIcon />}
						text='Поиск'
						showText={matches}
					/>
					<HeaderButton
						icon={<NotificationsIcon />}
						text='Уведомления'
						showText={matches}
					/>
					<HeaderButton
						icon={<MailOutlineIcon />}
						text='Сообщения'
						showText={matches}
					/>
					<HeaderButton
						icon={<PersonIcon />}
						text='Профиль'
						showText={matches}
					/>
					<HeaderButton
						icon={<MoreHorizIcon />}
						text='Ещё'
						showText={matches}
					/>
				</div>
			) : (
				<div className={classes.buttonsContainer}>
					<HeaderButton
						icon={<HashtagIcon />}
						text='Поиск'
						showText={matches}
					/>
					<HeaderButton
						icon={<SettingsIcon />}
						text='Настройки'
						showText={matches}
					/>
				</div>
			)}
			{isAuth ? (
				matches ? (
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
					<div className={classes.buttonsContainer}>
						<HeaderButton
							icon={<AddCircleIcon />}
							selected
							onClick={() => setCreatePostVisible(true)}
						/>
					</div>
				)
			) : null}
			<CreatePostModal
				visible={createPostVisible}
				onClose={() => setCreatePostVisible(false)}
			></CreatePostModal>
		</Wrapper>
	);
};

export default Header;
