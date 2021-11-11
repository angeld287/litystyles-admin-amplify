import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ProtectedRouteAdmin = ({ render: C, props: _props, ...rest }) => (
	<Route
		{...rest}
		render={(rProps) =>
			_props.isLoggedIn ? _props.state.user_roll.indexOf('admin') !== -1 ? (
				<C {...rProps} {..._props} />
			) : (
				<Redirect to="/" />
			) : (
				<Redirect to={`/signin?redirect=${rProps.location.pathname}${rProps.location.search}`} />
			)}
	/>
);

export const ProppedRoute = ({ render: C, ...rest }) => (
	<Route {...rest} render={(rProps) => <C {...rProps} />} />
);

ProtectedRouteAdmin.propTypes = {
	render: PropTypes.any,
	props: PropTypes.func
}

ProppedRoute.propTypes = {
	render: PropTypes.any,
	props: PropTypes.func
}