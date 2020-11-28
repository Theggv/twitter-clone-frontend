import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';

import MoreIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	container: {
		textAlign: 'left',
	},
	category: {
		fontSize: 13,
		fontWeight: 400,
		color: theme.palette.text.secondary,
	},
	title: {
		paddingTop: 2,
		fontSize: 15,
		fontWeight: 700,
	},
	tweetsNumber: {
		marginTop: 5,
		fontSize: 13,
		fontWeight: 400,
		color: theme.palette.text.secondary,
	},
	moreIcon: {
		margin: '-5px -5px 0 0',
		fontSize: 15,
		width: 30,
		height: 30,

		'& svg': {
			color: theme.palette.text.primary,
		},

		'& svg:hover': {
			color: theme.palette.primary.main,
		},
	},
}));

export interface TopicProps {
	actualWhere?: string;
	actualCategory?: string;
	title: string;
	icon?: React.FC;
	numTweets?: number;
}

const Topic: React.FC<TopicProps> = (props): React.ReactElement => {
	const classes = useStyles();

	const prettifyNumTweets = (numTweets: number) => {
		if (numTweets < 1000) return numTweets.toString();
		else if (numTweets < 10000) {
			const x = numTweets.toString().split('');
			x.splice(1, 0, ' ');
			return x.join('');
		} else if (numTweets < 100000)
			return Math.round(numTweets / 100) / 10 + ' тыс.';
		else if (numTweets < 1000000)
			return Math.round(numTweets / 1000) + ' тыс.';
		else if (numTweets < 10000000)
			return Math.round(numTweets / 10000) / 100 + ' млн';
		else if (numTweets < 100000000)
			return Math.round(numTweets / 100000) / 10 + ' млн';
		else return Math.round(numTweets / 1000000) + ' млн';
	};

	const tweetsNumberDiv = props.numTweets ? (
		<div className={classes.tweetsNumber}>
			{'Твитов: ' + prettifyNumTweets(props.numTweets!)}
		</div>
	) : null;

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.category}>
					{props.actualCategory
						? props.actualCategory + ' · Актуально'
						: 'Актуальные темы: ' + props.actualWhere}
				</div>
				<div className={classes.title}>{props.title}</div>
				{tweetsNumberDiv}
			</div>
			<IconButton className={classes.moreIcon} color='primary'>
				<MoreIcon />
			</IconButton>
		</div>
	);
};

export default Topic;
