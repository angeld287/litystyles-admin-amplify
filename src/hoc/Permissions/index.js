import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ProtectedRouteAdmin = ({ render: C, props: childProps, ...rest }) => (
	<Route
		{...rest}
		render={(rProps) =>
			childProps.isLoggedIn ? childProps.state.user_roll.indexOf('admin') !== -1 ? (
				<C {...rProps} {...childProps} />
			) : (
				<Redirect to="/" />
			) : (
				<Redirect to={`/signin?redirect=${rProps.location.pathname}${rProps.location.search}`} />
			)}
	/>
);

export const ProppedRoute = ({ render: C, props: childProps, ...rest }) => (
	<Route {...rest} render={(rProps) => <C {...rProps} {...childProps} />} />
);

ProtectedRouteAdmin.propTypes = {
	render: PropTypes.any,
	props: PropTypes.func
}

ProppedRoute.propTypes = {
	render: PropTypes.any,
	props: PropTypes.func
}