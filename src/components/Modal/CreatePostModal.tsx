import { makeStyles } from '@material-ui/core';
import React from 'react';
import CreatePost from '../Home/Main/ContentBlock/CreatePost';
import ModalWindow, { ModalWindowProps } from './ModalWindow';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: 0,
	},
	createPost: {
		minHeight: 120,
	},
}));

interface CreatePostModalProps extends ModalWindowProps {}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
	visible,
	onClose,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ModalWindow
			className={classes.root}
			visible={visible}
			onClose={onClose}
			fullWidth
		>
			<CreatePost className={classes.createPost} minRows={1}></CreatePost>
		</ModalWindow>
	);
};

export default CreatePostModal;
