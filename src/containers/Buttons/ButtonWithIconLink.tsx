import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonWithIcon, ButtonWithIconProps } from './ButtonWithIcon';

interface ButtonWithIconLinkProps {
	to: string;
	buttonProps: ButtonWithIconProps;
}

export const ButtonWithIconLink: React.FC<ButtonWithIconLinkProps> = ({
	children,
	to,
	buttonProps,
}) => {
	return (
		<Link to={to}>
			<ButtonWithIcon {...buttonProps}>{children}</ButtonWithIcon>
		</Link>
	);
};
