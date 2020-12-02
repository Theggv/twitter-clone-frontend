import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Topic, TopicProps } from './Topic';

import SettingsIcon from '@material-ui/icons/Settings';
import {
	ContainerItem,
	ContainerSidebar,
} from '../../../containers/Containers';
import { ButtonWithIcon } from '../../../containers/Buttons';

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: -5,
	},
}));

interface TopicsSuggestionProps {
	recomendations?: TopicProps[];
}

export const TopicsSuggestion: React.FC<TopicsSuggestionProps> = ({
	recomendations,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerSidebar
			title='Актуальные темы для вас'
			titleButton={() => (
				<ButtonWithIcon
					className={classes.button}
					icon={<SettingsIcon />}
				/>
			)}
		>
			{recomendations
				? recomendations.map((item, index) => (
						<ContainerItem key={index}>
							<Topic {...item} />
						</ContainerItem>
				  ))
				: null}
		</ContainerSidebar>
	);
};
