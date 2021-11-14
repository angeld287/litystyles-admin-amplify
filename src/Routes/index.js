import React from 'react';

import {
	BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';

import Home from '../pages/Home'
import Business from '../pages/Business'
import HeaderLinks from '../components/HeaderLinks';
import PropsTypes from 'prop-types';

const AppRoutes = ({ user }) => {

	if (user === undefined) return (<Spinner />)

	return (
		<Router>
			<HeaderLinks />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/business" element={<Business />} />
			</Routes>
		</Router>)
};

AppRoutes.propTypes = {
	user: PropsTypes.object
}

export default AppRoutes;