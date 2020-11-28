import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';

interface LoadingCircularProps {
	padding?: number;
}

export const LoaderCircular: React.FC<LoadingCircularProps> = ({ padding }) => {
	return (
		<div
			style={{
				textAlign: 'center',
				padding: padding || 20,
				display: 'flex',
				flex: '1',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<CircularProgress />
		</div>
	);
};
