import React from 'react';
import { DarkButton, DarkButtonProps } from './DarkButton';

import CloseIcon from '@material-ui/icons/Close';

interface DeleteButtonProps extends DarkButtonProps {}

export const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
	return (
		<DarkButton {...props}>
			<CloseIcon />
		</DarkButton>
	);
};
