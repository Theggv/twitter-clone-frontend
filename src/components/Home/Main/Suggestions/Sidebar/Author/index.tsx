import { makeStyles } from '@material-ui/core';
import React from 'react';

import Author from './Author';

import { UserInterface } from '../../../../../../store/ducks/recommendations';
import {
	ContainerItem,
	ContainerSidebar,
} from '../../../../../../containers/Containers';
import { LoaderCircular } from '../../../../../../containers/Loaders';

const useStyles = makeStyles((theme) => ({
	noRecommendations: {
		textAlign: 'left',
		color: theme.palette.text.secondary,
	},
}));

interface AuthorRecomendationsProps {
	title: string;
	recomendations?: UserInterface[];
	isLoading?: boolean;
}

const AuthorRecomendations: React.FC<AuthorRecomendationsProps> = ({
	title,
	recomendations,
	isLoading = false,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerSidebar title={title}>
			{isLoading ? (
				<ContainerItem>
					<LoaderCircular />
				</ContainerItem>
			) : recomendations && recomendations.length ? (
				recomendations.map((item, index) => (
					<Author key={index} author={{ ...item }} />
				))
			) : (
				<ContainerItem className={classes.noRecommendations}>
					Рекомендаций не найдено
				</ContainerItem>
			)}
		</ContainerSidebar>
	);
};

export default AuthorRecomendations;
