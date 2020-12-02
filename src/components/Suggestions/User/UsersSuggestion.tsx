import { makeStyles } from '@material-ui/core';
import React from 'react';

import { UserSuggestion } from './UserSuggestion';

import {
	fetchRecommended,
	LoadingState,
	selectRecommendationsItems,
	selectRecommendionsLoadingState,
} from '../../../store/ducks/recommendations';
import {
	ContainerItem,
	ContainerSidebar,
} from '../../../containers/Containers';
import { LoaderCircular } from '../../../containers/Loaders';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	notFound: {
		textAlign: 'left',
		color: theme.palette.text.secondary,
	},
}));

interface UsersSuggestionProps {
	title: string;
}

export const UsersSuggestion: React.FC<UsersSuggestionProps> = ({
	title,
}): React.ReactElement | null => {
	const classes = useStyles();

	const recomendations = useSelector(selectRecommendationsItems);
	const loadingState = useSelector(selectRecommendionsLoadingState);
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (
			loadingState !== LoadingState.LOADED &&
			loadingState !== LoadingState.LOADING
		)
			dispatch(fetchRecommended());
	}, [dispatch, loadingState]);

	if (loadingState === LoadingState.LOADING)
		return (
			<ContainerSidebar title={title}>
				<ContainerItem>
					<LoaderCircular />
				</ContainerItem>
			</ContainerSidebar>
		);

	if (loadingState !== LoadingState.LOADED) return null;

	return (
		<ContainerSidebar title={title}>
			{recomendations && recomendations.length ? (
				recomendations.map((item, index) =>
					index < 3 ? (
						<UserSuggestion key={index} user={{ ...item }} />
					) : null
				)
			) : (
				<ContainerItem className={classes.notFound}>
					Рекомендаций не найдено
				</ContainerItem>
			)}
		</ContainerSidebar>
	);
};
