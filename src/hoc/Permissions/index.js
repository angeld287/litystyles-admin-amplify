import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ProtectedRouteAdmin = ({ render: C, user: _user, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(rProps) =>
				_user !== null && _user.accessToken.payload['cognito:groups'].indexOf('admin') !== -1 ? (
					<C {...rProps} />
				) : (
					<Redirect to={`/signin?redirect=${rProps.location.pathname}${rProps.location.search}`} />
				)}
		/>
	)
};

export const ProppedRoute = ({ render: C, ...rest }) => (
	<Route {...rest} render={(rProps) => <C {...rProps} />} />
);

ProtectedRouteAdmin.propTypes = {
	render: PropTypes.any,
	user: PropTypes.object
}

ProppedRoute.propTypes = {
	render: PropTypes.any,
	props: PropTypes.func
}