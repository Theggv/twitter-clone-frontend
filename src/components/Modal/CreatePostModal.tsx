import React from 'react';
import CreatePost from '../Home/Main/ContentBlock/CreatePost';
import ModalWindow, { ModalWindowProps } from './ModalWindow';

interface CreatePostModalProps extends ModalWindowProps {}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
	visible,
	onClose,
}): React.ReactElement => {
	return (
		<ModalWindow visible={visible} onClose={onClose} fullWidth>
			<CreatePost minRows={4}></CreatePost>
		</ModalWindow>
	);
};

export default CreatePostModal;
