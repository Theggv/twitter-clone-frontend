import { makeStyles } from '@material-ui/core';
import React from 'react';
import CreatePost from '../AddTweet/CreatePost';
import {
	ContainerModal,
	ContainerModalProps,
} from '../../containers/Containers';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 0,
	},
	createPost: {
		minHeight: 120,
	},
}));

interface CreatePostModalProps extends ContainerModalProps {}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
	visible,
	onClose,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerModal
			className={classes.root}
			visible={visible}
			onClose={onClose}
			fullWidth
		>
			<CreatePost className={classes.createPost} minRows={1}></CreatePost>
		</ContainerModal>
	);
};

export default CreatePostModal;
