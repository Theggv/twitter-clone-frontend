import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { LoadingState, selectAuthState } from '../../store/ducks/auth';

export const ProtectedRoute: React.FC<RouteProps> = ({
	component: Component,
	...rest
}) => {
	const authState = useSelector(selectAuthState);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (authState !== LoadingState.SUCCESS) {
					// @ts-ignore
					return <Component />;
				}

				return (
					<Redirect
						to={{
							pathname: '/auth',
							state: { from: props.location },
						}}
					/>
				);
			}}
		></Route>
	);
};
