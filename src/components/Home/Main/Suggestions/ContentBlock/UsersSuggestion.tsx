import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ContainerItem, ContainerItemTitle } from '../../../../../containers/Containers';
import Author, { AuthorProps } from '../Sidebar/Author/Author';

const useStyles = makeStyles((theme) => ({
	root: {},
	title: {
		margin: '0 0 -6px',
		textAlign: 'left',

		display: 'flex',
		justifyContent: 'space-between',
	},
	titleText: {
		fontSize: 19,
		fontWeight: 800,
	},
	titleButton: {},
	recommendations: {
		textAlign: 'left',
	},
	buttonMore: {
		padding: '5px 0',
		textAlign: 'left',
		fontSize: 15,
		color: theme.palette.primary.main,
		cursor: 'pointer',
	},
}));

interface UsersSuggestionProps {
	recommendations?: Array<AuthorProps>;
	onClickShowMore?: () => void;
}

const UsersSuggestion: React.FC<UsersSuggestionProps> = ({
	recommendations,
	onClickShowMore,
}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<ContainerItem hoverType='disabled'>
				<ContainerItemTitle>Кого читать</ContainerItemTitle>
			</ContainerItem>
			{recommendations &&
				recommendations.map((item, index) => (
					<Author key={index} {...item} />
				))}
			<ContainerItem>
				<div
					className={classes.buttonMore}
					onClick={() => onClickShowMore && onClickShowMore()}
				>
					Показать еще
				</div>
			</ContainerItem>
		</div>
	);
};

export default UsersSuggestion;
