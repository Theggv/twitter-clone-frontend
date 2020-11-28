import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { UserInterface } from '../../../../../../store/ducks/recommendations';
import { ContainerAvatar } from '../../../../../../containers/Containers';

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
		display: 'flex',
		justifyContent: 'flex-start',
		flexDirection: 'column',
		fontSize: 15,
	},
	top: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
	},
	bottom: {
		marginTop: 5,
	},
	left: {
		display: 'flex',
		flexDirection: 'column',
		textAlign: 'left',
	},
	author: {
		fontWeight: 700,
		alignItems: 'center',
	},
	url: {
		color: 'rgb(91, 112, 131)',
	},
	description: {},
	right: {},
	readButton: {
		marginTop: 5,
		padding: '0px 16px',
		minHeight: 30,
	},
	icon: {
		margin: '0 0 -3px 3px',
		fontSize: 18,
	},
}));

export interface AuthorProps {
	author?: UserInterface;
	onReadClick?: () => void;
	detail?: boolean;
}

const Author: React.FC<AuthorProps> = ({
	author = {
		fullName: 'Team Secret',
		userName: 'teamsecret',
		avatarUrl:
			'https://pbs.twimg.com/profile_images/1322870988137205760/4UPgWLRP_bigger.jpg',
		description:
			'Official Twitter of Team Secret. Business inquiries: management@teamsecret.gg | @TeamSecret on all socials',
		verified: true,
	},
	detail = false,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerAvatar source={author.avatarUrl} className={classes.root}>
			<div className={classes.top}>
				<div className={classes.left}>
					<div className={classes.author}>
						{author.fullName}
						{author.verified ? (
							<VerifiedUserIcon
								color='primary'
								className={classes.icon}
							/>
						) : null}
					</div>
					<div className={classes.url}>@{author.userName}</div>
				</div>
				<div className={classes.right}>
					<Button
						variant='outlined'
						color='primary'
						className={classes.readButton}
					>
						Читать
					</Button>
				</div>
			</div>
			{detail && author.description ? (
				<div className={classes.bottom}>
					<div className={classes.description}>
						{author.description}
					</div>
				</div>
			) : null}
		</ContainerAvatar>
	);
};

export default Author;
