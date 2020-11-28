import { makeStyles } from '@material-ui/core';
import React from 'react';
import Topic, { TopicProps } from './Topic';

import SettingsIcon from '@material-ui/icons/Settings';
import ButtonWithIcon from '../../../../../../containers/Buttons/ButtonWithIcon';
import {
	ContainerItem,
	ContainerSidebar,
} from '../../../../../../containers/Containers';

const useStyles = makeStyles((theme) => ({
	button: {
		marginRight: -5,
	},
}));

interface TopicRecomendationsProps {
	recomendations?: Array<TopicProps>;
}

const TopicRecomendations: React.FC<TopicRecomendationsProps> = ({
	recomendations,
}): React.ReactElement => {
	const classes = useStyles();

	const filler = (
		<>
			<ContainerItem>
				<Topic
					title='Twits count unknown'
					actualCategory='Технологии'
				/>
			</ContainerItem>
			<ContainerItem>
				<Topic
					title='Twits count < 1k'
					actualWhere='Россия'
					numTweets={274}
				/>
			</ContainerItem>
			<ContainerItem>
				<Topic
					title='Twits counts < 10k'
					actualCategory='Технологии'
					numTweets={1851}
				/>
			</ContainerItem>
			<ContainerItem>
				<Topic
					title='Twits counts < 100k'
					actualWhere='Россия'
					numTweets={41230}
				/>
			</ContainerItem>
			<ContainerItem>
				<Topic
					title='Twits counts < 1m'
					actualWhere='Россия'
					numTweets={723230}
				/>
			</ContainerItem>
			<ContainerItem>
				<Topic
					title='Twits counts < 10m'
					actualWhere='Россия'
					numTweets={5841230}
				/>
			</ContainerItem>
			<ContainerItem>
				<Topic
					title='Twits counts < 100m'
					actualWhere='Россия'
					numTweets={15841230}
				/>
			</ContainerItem>

			<ContainerItem>
				<Topic
					title='Twits counts > 100m'
					actualWhere='Россия'
					numTweets={621841230}
				/>
			</ContainerItem>
		</>
	);

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
				: filler}
		</ContainerSidebar>
	);
};

export default TopicRecomendations;
